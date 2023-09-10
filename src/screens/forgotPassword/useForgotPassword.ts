import {ForgotPasswordHookProps} from './forgotPasswordProps';

import {useAuthNavigation, useAuthRoute} from '../../hooks/useAppNavigation';

const useForgotPassword = (props: ForgotPasswordHookProps) => {
  const {
    params: {type},
  } = useAuthRoute('forgotPassword');

  return {};
};

export default useForgotPassword;
