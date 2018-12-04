import { mount, createLocalVue } from "@vue/test-utils";
import { render } from "@vue/server-test-utils"
import Vuex from "vuex";
import RadioButton from "../src/components/RadioButton.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Radio buttons", () => {
  let propData;
  beforeEach(() => {
    propData = {
      RadioButton: {
        label: "",
        name: ""
      }
    }
  });

  it("mounted as expected", () => {
    const wrapper = mount(RadioButton, { propData });
    expect(wrapper.findAll(".radio-group").length).toEqual(1)
  });
});
