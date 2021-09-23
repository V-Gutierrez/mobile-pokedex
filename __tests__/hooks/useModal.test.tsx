import { renderHook, act } from '@testing-library/react-hooks'
import { useModal } from '../../src/hooks'


describe('useModal hooks', () => {
  test('should toggle modal to true and false', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isShowing).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isShowing).toBe(false)
  })
});