export interface RejectedWithValueAction<RejectedValue> {
  type: string;
  payload: RejectedValue;
  error: { message: "Rejected" };
}
