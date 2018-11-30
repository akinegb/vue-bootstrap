import { shallowMount } from "@vue/test-utils";
// import { renderToString } from '@vue/server-test-utils';
import Form from "../src/components/Form.vue";

describe("Form component", () => {
  it("should contain aleast one field", () => {
    const wrapper = shallowMount(Form);
    expect(wrapper.findAll('.form').length).toEqual(1);
  });
});
