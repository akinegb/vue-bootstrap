import { shallowMount, createLocalVue } from "@vue/test-utils";
// import { renderToString } from "@vue/server-test-utils";
import Vuex from "vuex";
import Form from "../src/components/Form.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Form component", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
  });

  it("should contain aleast one field", () => {
    const wrapper = shallowMount(Form, { store, localVue });
    expect(wrapper.findAll(".form").length).toEqual(1);
  });
});
