// 自动逻辑测试
// Jest和Enzyme是差不多，语法也是差不多的，是进行前端逻辑自动化测试的

import React from "react";
import chalk, { red, yellow, green, white } from "chalk";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; // react16适配器
import toJson from "enzyme-to-json"; // 引入enzyme-to-json为快照提供了json的组件格式
import Jest from "../demo";

Enzyme.configure({ adapter: new Adapter() }); // 适配react16 可以直接测试react16版本之后的react组件，很简单

describe("这是一组测试用例", () => {
  it(red("Enzyme测试组件"), () => {
    // Enzyme测试用例
    let wrapper = shallow(<Jest />);
    console.log("state", wrapper.state());
  });
  test(white("2+2是否是4呢"), () => {
    // jest测试用例
    expect(4).toBe(4);
  });
  test(yellow("2+5是否是5呢"), () => {
    expect(2 + 3).toBe(5);
  });
  test(green("2+4是否是6呢"), () => {
    expect(2 + 4).toBe(6);
  });
});
