import { sample } from "effector";
import {
  $isEditedInfoSave,
  $userInfo,
  editUserInfoFn,
  editUserInfoForm,
  setStateEditedInfoFn,
} from ".";

$isEditedInfoSave.on(setStateEditedInfoFn, (value) => !value);

$userInfo.on(editUserInfoFn, (info, newInfo) => ({ ...info, ...newInfo }));

sample({
  clock: editUserInfoForm.formValidated,
  target: [
    editUserInfoFn,
    setStateEditedInfoFn,
    editUserInfoForm.setInitialForm.prepend((form) => form),
  ],
});
