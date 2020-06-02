class tamano {

    async listar() {
        const res = await fetch(`http://${ip}:${puerto}/api/tamano`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }

    async buscar(id) {
        const res = await fetch(`http://${ip}:${puerto}/api/tamano/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }

}

