import { mount, createLocalVue } from "@vue/test-utils";
// import { renderToString } from "@vue/server-test-utils";
import Vuex from "vuex";
import Form from "../src/components/Form.vue";
import { state } from "../src/store/initialState";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Form component", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state
    })
  });

  it("should contain aleast one field", () => {
    const wrapper = mount(Form, { store, localVue });
    expect(wrapper.findAll("div").length).toBeGreaterThan(0);
  });
});
