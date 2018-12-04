import { mount, createLocalVue } from "@vue/test-utils";
import { render } from "@vue/server-test-utils"
import Vuex from "vuex";
import Dropdown from "../src/components/Dropdown.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Dropdown select widget", () => {
  let propData;
  
  beforeEach(() => {
    propData = {
      options: []
    }
  });

  it("mounted as expected", () => {
    const wrapper = mount(Dropdown, { propData });
    expect(wrapper.findAll(".dropdown-group").length).toEqual(1)
  });
});
