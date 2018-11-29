import { mount } from "@vue/test-utils";
import { renderToString } from '@vue/server-test-utils';
import Input from "../src/components/Input.vue";
import Vue from "vue";

describe("Input field", () => {
  it("mounted as expected", () => {
    const wrapperText = renderToString(Input);
    expect(wrapperText).toContain("<input>");
  });
});
