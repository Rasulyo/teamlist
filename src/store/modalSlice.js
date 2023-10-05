import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSendOpenModal: false,
  isUserSettingsModal: false,
  isSuccessModal: false,
  isEmailModal: false,
  isCheckboxModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    sendOpenModal: (state, action) => {
      state.isSendOpenModal = action.payload;
    },
    sendCloseModal: (state, action) => {
      state.isSendOpenModal = action.payload;
    },
    userSettingsOpenModal: (state, action) => {
      state.userSettingsModal = action.payload;
    },
    userSettingsCloseModal: (state, action) => {
      state.userSettingsModal = action.payload;
    },
    successOpenModal: (state, action) => {
      state.isSuccessModal = action.payload;
    },
    successCloseModal: (state, action) => {
      state.isSuccessModal = action.payload;
    },
    emailOpenModal: (state, action) => {
      state.isEmailModal = action.payload;
    },
    emailCloseModal: (state, action) => {
      state.isEmailModal = action.payload;
    },
    checkboxOpenModal: (state, action) => {
      state.isCheckboxModal = action.payload;
    },
    checkboxCloseModal: (state, action) => {
      state.isCheckboxModal = action.payload;
    },
  },
});

export const {
  sendCloseModal,
  sendOpenModal,
  userSettingsOpenModal,
  userSettingsCloseModal,
  successOpenModal,
  successCloseModal,
  emailOpenModal,
  emailCloseModal,
  checkboxOpenModal,
  checkboxCloseModal,
} = modalSlice.actions;

export const selectSendModal = (state) => state.modals.isSendOpenModal;
export const selectUserModal = (state) => state.modals.userSettingsModal;
export const selectSuccessModal = (state) => state.modals.isSuccessModal;
export const selectEmailModal = (state) => state.modals.isEmailModal;
export const selectCheckboxModal = (state) => state.modals.isCheckboxModal;
export default modalSlice.reducer;
