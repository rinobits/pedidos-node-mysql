class eliminarPedido {
    async eliminar(id) {
        const res = await fetch(`http://${ip}:${puerto}/api/pedidos/eliminar/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "DELETE"
        });
        const data = await res.json();
        return data.data;
    }
    
}
