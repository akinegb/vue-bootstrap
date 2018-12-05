import { shallowMount, createLocalVue } from "@vue/test-utils";
import { render } from "@vue/server-test-utils"
import Dropdown from "../src/components/Dropdown.vue";


describe("Dropdown select widget", () => {
  let propData;

  beforeEach(() => {
    propData = {
      options: []
    }
  });

  it("mounted as expected", () => {
    const wrapper = shallowMount(Dropdown, { propData });
    expect(wrapper.findAll(".dropdown-group").length).toEqual(1)
  });
});
