import {
  SET_PATIENT_AGE,
  SET_PATIENT_AVATAR,
  SET_PATIENT_CHAT,
  SET_PATIENT_COMPLAINT,
  SET_PATIENT_NAME,
  SET_PATIENT_OPERATION,
  SET_PATIENT_OPERATION_IN_PROGRESS,
  SET_PATIENT_OPERATION_OUTCOME,
  SET_PATIENT_OPERATION_PROGRESS,
  SET_PATIENT_REMEDY,
  SET_PATIENT_REMEDY_IN_PROGRESS,
  SET_PATIENT_REMEDY_OUTCOME,
  SET_PATIENT_REMEDY_PROGRESS,
  SET_PATIENT_SELECTED_OPERATION,
  SET_PATIENT_SELECTED_REMEDY,
  SET_PATIENT_TREATMENT,
  SET_PATIENT_TREATMENT_DIALOG_IS_OPEN,
} from "../actionTypes";
import {
  Operation,
  PatientAction,
  Remedy,
  TreatmentType,
  OperationOutcome,
  RemedyOutcome,
} from "../../types";

export const setPatientAge = (age: number): PatientAction => ({
  type: SET_PATIENT_AGE,
  payload: { age },
});

export const setPatientAvatar = (avatar: string): PatientAction => ({
  type: SET_PATIENT_AVATAR,
  payload: { avatar },
});

export const setPatientChat = (chat: string[]): PatientAction => ({
  type: SET_PATIENT_CHAT,
  payload: { chat },
});

export const setPatientComplaint = (complaint: string): PatientAction => ({
  type: SET_PATIENT_COMPLAINT,
  payload: { complaint },
});

export const setPatientName = (name: string): PatientAction => ({
  type: SET_PATIENT_NAME,
  payload: { name },
});

export const setPatientOperation = (operation: Operation): PatientAction => ({
  type: SET_PATIENT_OPERATION,
  payload: { operation },
});

export const setPatientOperationInProgress = (
  operationInProgress: boolean
): PatientAction => ({
  type: SET_PATIENT_OPERATION_IN_PROGRESS,
  payload: { operationInProgress },
});

export const setPatientOperationOutcome = (
  operationOutcome: OperationOutcome
): PatientAction => ({
  type: SET_PATIENT_OPERATION_OUTCOME,
  payload: { operationOutcome },
});

export const setPatientOperationProgress = (
  operationProgress: number
): PatientAction => ({
  type: SET_PATIENT_OPERATION_PROGRESS,
  payload: { operationProgress },
});

export const setPatientRemedy = (remedy: Remedy): PatientAction => ({
  type: SET_PATIENT_REMEDY,
  payload: { remedy },
});

export const setPatientRemedyInProgress = (
  remedyInProgress: boolean
): PatientAction => ({
  type: SET_PATIENT_REMEDY_IN_PROGRESS,
  payload: { remedyInProgress },
});

export const setPatientRemedyOutcome = (
  remedyOutcome: RemedyOutcome
): PatientAction => ({
  type: SET_PATIENT_REMEDY_OUTCOME,
  payload: { remedyOutcome },
});

export const setPatientRemedyProgress = (
  remedyProgress: number
): PatientAction => ({
  type: SET_PATIENT_REMEDY_PROGRESS,
  payload: { remedyProgress },
});

export const setPatientSelectedOperation = (
  selectedOperation: Operation
): PatientAction => ({
  type: SET_PATIENT_SELECTED_OPERATION,
  payload: { selectedOperation },
});

export const setPatientSelectedRemedy = (
  selectedRemedy: Remedy
): PatientAction => ({
  type: SET_PATIENT_SELECTED_REMEDY,
  payload: { selectedRemedy },
});

export const setPatientTreatment = (
  treatment: TreatmentType
): PatientAction => ({
  type: SET_PATIENT_TREATMENT,
  payload: { treatment },
});

export const setPatientTreatmentDialogIsOpen = (
  treatmentDialogIsOpen: boolean
): PatientAction => ({
  type: SET_PATIENT_TREATMENT_DIALOG_IS_OPEN,
  payload: { treatmentDialogIsOpen },
});
