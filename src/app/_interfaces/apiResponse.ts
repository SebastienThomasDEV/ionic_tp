export default interface ApiResponse {
    message: string;
    code: number;
    error?: string;
    token?: string;
}
