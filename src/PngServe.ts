

export default function serve(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    res.end('squonk');  
}