class ApiService {
    private readonly url = "http://localhost:3333";

    fetch(endpoint: string, options: RequestInit = {}): Promise<any> {
        return fetch(this.url + endpoint, options)
            .then(response => response.json())
        ;
    }
}

export const apiService = new ApiService();