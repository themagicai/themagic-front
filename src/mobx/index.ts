import http from "../api/api";

class TutorialDataService {
    getAll() {
        return http.get("/tutorials");
    }

    get(id: number) {
        return http.get(`/tutorials/${id}`);
    }

    create(data: string) {
        return http.post("/tutorials", data);
    }

    update(id: number, data: string) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id: number) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title: string) {
        return http.get(`/tutorials?title=${title}`);
    }
}

export const dataMobx = new TutorialDataService();
