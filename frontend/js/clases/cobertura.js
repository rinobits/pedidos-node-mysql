class cobertura {
    async listar() {
        const res = await fetch(`http://${ip}:${puerto}/api/cobertura`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }
    async buscar(id) {
        const res = await fetch(`http://${ip}:${puerto}/api/cobertura/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }

}

