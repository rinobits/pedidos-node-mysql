class tamano {

    async listar() {
        const res = await fetch(`http://${ip}:${puerto}/api/tipoMasa`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }

    async buscar(id) {
        const res = await fetch(`http://${ip}:${puerto}/api/tipoMasa/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }

}

