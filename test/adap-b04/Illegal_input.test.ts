import { describe, it, expect } from "vitest";

import { Name } from "../../src/adap-b04/names/Name";
import { ESCAPE_CHARACTER } from "../../src/adap-b04/common/Printable";
import { AbstractName } from "../../src/adap-b04/names/AbstractName";
import { StringName } from "../../src/adap-b04/names/StringName";
import { StringArrayName } from "../../src/adap-b04/names/StringArrayName";

describe("Basic StringName function tests", () => {
  it("test insert", () => {
    let n: Name = new StringName("oss.fau.de");
    n.insert(1, "cs");
    expect(n.asString()).toBe("oss.cs.fau.de");
  });
  it("test append", () => {
    let n: Name = new StringName("oss.cs.fau");
    n.append("de");
    expect(n.asString()).toBe("oss.cs.fau.de");
  });
  it("test remove", () => {
    let n: Name = new StringName("oss.cs.fau.de");
    n.remove(0);
    expect(n.asString()).toBe("cs.fau.de");
  });
});

describe("Basic StringArrayName function tests", () => {
  it("test insert", () => {
    let n: Name = new StringArrayName(["oss", "fau", "de"]);
    n.insert(1, "cs");
    expect(n.asString()).toBe("oss.cs.fau.de");
  });
  it("test append", () => {
    let n: Name = new StringArrayName(["oss", "cs", "fau"]);
    n.append("de");
    expect(n.asString()).toBe("oss.cs.fau.de");
  });
  it("test remove", () => {
    let n: Name = new StringArrayName(["oss", "cs", "fau", "de"]);
    n.remove(0);
    expect(n.asString()).toBe("cs.fau.de");
  });
});

describe("Delimiter function tests", () => {
  it("test insert", () => {
    let n: Name = new StringName("oss#fau#de", '#');
    n.insert(1, "cs");
    expect(n.asString()).toBe("oss#cs#fau#de");
  });
});

describe("Escape character extravaganza", () => {
  it("test escape and delimiter boundary conditions", () => {
    let n: Name = new StringName("oss.cs.fau.de", '#');
    expect(n.getNoComponents()).toBe(1);
    expect(n.asString()).toBe("oss.cs.fau.de");
    n.append("people");
    expect(n.asString()).toBe("oss.cs.fau.de#people");
  });

  describe("escape charater function tests", () => {
    it("test insert", () => {
      let n: Name = new StringName("oss#fau"+ESCAPE_CHARACTER+"#au"+"#de", '#');
      n.insert(1, "cs");
      n.remove(2);
      expect(n.asString()).toBe("oss#cs#de");
    });
    it("test NoComponent", () => {
        let n: Name = new StringName("oss#fau"+ESCAPE_CHARACTER+"#au"+"#de", '#');
        expect(n.getNoComponents()).toBe(3);
        n.remove(2);
        expect(n.getNoComponents()).toBe(2);
      });
  });
});
