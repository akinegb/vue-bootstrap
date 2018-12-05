import { shallowMount, mount } from "@vue/test-utils";
import { render } from "@vue/server-test-utils"
import Input from "../src/components/Input.vue";


describe("Input field", () => {
  it("mounted as expected", () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.findAll("label").length).toEqual(1)
  });

  it("is active and able to be typed into", () => {
    const wrapper = shallowMount(Input).findAll("input").at(0);
    wrapper.trigger("focus");
    expect(wrapper.classes()).toContain("active");
  });
});
