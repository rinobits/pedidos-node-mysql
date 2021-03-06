class Buscar {
    async buscar(id) {
        const res = await fetch(`http://${ip}:${puerto}/api/pedidos/buscar/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData.data[0];
    }
}