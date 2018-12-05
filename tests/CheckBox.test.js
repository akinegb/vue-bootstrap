import { mount, createLocalVue } from "@vue/test-utils";
// import { render } from "@vue/server-test-utils"
import Vuex from "vuex";
import CheckBox from "../src/components/CheckBox.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Checkbox component", () => {
  let propData
  beforeEach(() => {
    propData = {
      options: []
    }
  });

  it("mounted as expected", () => {
    const wrapper = mount(CheckBox, { propData });
    expect(wrapper.findAll(".checkbox-group").length).toEqual(1)
  });
});
