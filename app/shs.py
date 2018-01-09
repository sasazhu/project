import http.server
import socketserver

PORT = 8000

handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map['.json'] = 'application/json'

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()