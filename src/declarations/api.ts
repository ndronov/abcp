export interface SuccessResponse<Data> {
  ok: true;
  data: Data;
}
export interface ErrorResponse {
  ok: false;
  code?: number;
  message?: string;
}

export type ApiResponse<Data = void> = SuccessResponse<Data> | ErrorResponse;
