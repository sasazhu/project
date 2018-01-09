import re, rx, json

def map_line(l):
    if 'group' in l:
        return (1, re.findall('<span class="group">(.*?)</span>', l)[0])
    else:
        return (2, re.findall('<div class="color-tag (dark|light)".*<span class="shade">(.+?)</span><span class="hex">(.*?)</span></div>', l)[0])

def group(r, o):
    if o[0] == 1:
        r['g'] = o[1]
    else:
        r['cs'].append((r['g'], *o[1]))

    return r


with open('material-color-pattern.html', 'r', encoding='utf8') as f:
    h = f.readlines()

h = ''.join(h).replace('\n', '')
lines = re.findall('<div class="color-tag.*?</div>', h)

o = rx.Observable.from_(lines) \
    .map(map_line) \
    .reduce(group, seed={'g': '', 'cs': []}) \
    .flat_map(lambda r: r['cs']) \
    .map(lambda c: {'theme': c[0], 'tone': c[1], 'shade': c[2], 'value': c[3]}) \
    .group_by(lambda c: c['theme']) \
    .flat_map(lambda g: g) \
    .map(lambda c: json.dumps(c)) \
    .to_blocking()
    # .filter(lambda g: len(g) >= 2) \
    # .filter(lambda c: c[1] == 'light' and (c[2] == '500' or c[2] == '700')) \
    # .subscribe(lambda p: print(p))

with open('material-color-pattern.js', 'w') as f:
    f.write('export default MaterialColorPattern = [\n' + ',\n'.join(o) + '];')
# r = [i for i in o]
# json.dump(r, open('material-color-pattern.js', 'w'))
print('done')
# print(r)
# for c in r:
#     print(c)
    # print([c[0][3], c[1][3]])
