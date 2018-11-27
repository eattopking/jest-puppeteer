// 自动逻辑测试

import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; // react16适配器
import toJson from "enzyme-to-json"; // 引入enzyme-to-json为快照提供了json的组件格式
import Jest from "../demo";

Enzyme.configure({ adapter: new Adapter() }); //适配react16

describe("这是一组测试用例", () => {
  it("Enzyme测试组件", () => {
    // Enzyme测试用例
    let wrapper = shallow(<Jest />);
  });
  test("2+2是否是4呢", () => {
    // jest测试用例
    expect(4).toBe(4);
  });
  test("2+5是否是5呢", () => {
    expect(2 + 3).toBe(5);
  });
  test("2+4是否是6呢", () => {
    expect(2 + 4).toBe(6);
  });
});
