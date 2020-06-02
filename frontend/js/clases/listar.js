class pedidosFecha {
    async listar() {
        const res = await fetch(`http://${ip}:${puerto}/api/pedidos/listar`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }
}
