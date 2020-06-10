
import joinRoom from "./server/app"

describe("joinRoom", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
