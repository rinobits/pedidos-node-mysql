class saborMasa {
    async listar() {
        const res = await fetch(`http://${ip}:${puerto}/api/saborMasa`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }

    async buscar(id) {
        const res = await fetch(`http://${ip}:${puerto}/api/saborMasa/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const jsonData = await res.json();
        return jsonData;
    }

}
