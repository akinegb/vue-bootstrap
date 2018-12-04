import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { render } from "@vue/server-test-utils"
import Vuex from "vuex";
import Input from "../src/components/Input.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Input field", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
  });

  it("mounted as expected", () => {
    const wrapper = shallowMount(Input, { store, localVue });
    expect(wrapper.findAll("label").length).toEqual(1)
  });

  it("is active and able to be typed into", () => {
    const wrapper = shallowMount(Input, { store, localVue }).findAll("input").at(0);
    wrapper.trigger("focus");
    expect(wrapper.classes()).toContain("active");
  });
});
