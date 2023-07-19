import { ChangeEvent } from 'react';

export interface RadioProps {
  /**
   * Input 요소의 id를 의미합니다.
   */
  id: string;
  /**
   * Input 요소의 value를 의미합니다.
   */
  value: string;
  /**
   * 값이 `true`면 체크 표시가 됩니다.
   * @default false
   */
  checked?: boolean;
  /**
   * 클릭 이벤트가 발생할 때 호출할 함수입니다.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
