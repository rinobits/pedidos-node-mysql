class eliminarPedido {
    async buscar(id) {
        const res = await fetch(`http://${ip}:${puerto}/api/pedidos/eliminar/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const data = await res.json();
        return data.data;
    }
    
}
