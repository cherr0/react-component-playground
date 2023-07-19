export interface ToggleProps {
  /**
   * `Toggle` 컴포넌트의 크기를 결정합니다.
   */
  size?: 'sm' | 'md';
  /**
   * 값이 활성화되면 체크 표시가 됩니다.
   */
  checked?: boolean;
  /**
   * 값이 `true`면 컴포넌트가 비활성화 상태가 됩니다.
   */
  disabled?: boolean;
  /**
   * 클릭 이벤트가 발생할 때 호출하는 Callback 함수를 의미합니다.
   */
  onClick?: () => void;
}
