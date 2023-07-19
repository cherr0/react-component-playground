export interface TabProps {
  /**
   * Tab에 들어가는 Unit의 정보입니다.
   */
  list: string[]
  /**
   * Tab의 스타일을 지정합니다.
   */
  variant?: 'filled' | 'lined'
  /**
   * Tab의 사이즈를 지정합니다.
   */
  size?: 'md' | 'lg'
  /**
   * 활성화 시, Tab의 내용을 한 화면에 고정 너비로 표시하게 됩니다
   */
  fixed?: boolean
  onChange?: (arg: string) => void
  defaultIndex?: number
}
