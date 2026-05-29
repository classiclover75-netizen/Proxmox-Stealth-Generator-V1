import { getAlNum, getHex } from './utils';
import type { DiskVendor, PcBrand } from '../types';

export const diskDB: DiskVendor[] = [
  {
    vendor: "Samsung",
    models: [
      { m: "SSD 860 EVO 500GB", t: "SATA SSD" },
      { m: "SSD 870 QVO 1TB", t: "SATA SSD" },
      { m: "SSD 870 EVO 2TB", t: "SATA SSD" },
      { m: "SSD 860 PRO 512GB", t: "SATA SSD" },
      { m: "SSD 970 EVO Plus 500GB", t: "NVMe" },
      { m: "SSD 980 PRO 1TB", t: "NVMe" },
      { m: "SSD 980 PRO 2TB", t: "NVMe" },
      { m: "SSD 990 PRO 1TB", t: "NVMe" },
      { m: "SSD 990 PRO 2TB", t: "NVMe" },
      { m: "SSD 970 PRO 512GB", t: "NVMe" }
    ],
    serialGen: () => 'S' + getAlNum(2) + 'N' + getAlNum(11)
  },
  {
    vendor: "Western Digital",
    models: [
      { m: "WD Blue SA510 500GB", t: "SATA SSD" },
      { m: "WD Blue SA510 1TB", t: "SATA SSD" },
      { m: "WD Green 240GB", t: "SATA SSD" },
      { m: "WD Red SA500 1TB", t: "SATA SSD" },
      { m: "WD Black SN750 500GB", t: "NVMe" },
      { m: "WD Black SN770 1TB", t: "NVMe" },
      { m: "WD Black SN850X 1TB", t: "NVMe" },
      { m: "WD Black SN850X 2TB", t: "NVMe" },
      { m: "WD Blue SN570 1TB", t: "NVMe" },
      { m: "WD Red SN700 1TB", t: "NVMe" }
    ],
    serialGen: () => '2' + (Math.floor(Math.random() * 4) + 1).toString() + String(Math.floor(Math.random() * 52) + 1).padStart(2, '0') + getAlNum(8)
  },
  {
    vendor: "Seagate",
    models: [
      { m: "BarraCuda 120 SSD 500GB", t: "SATA SSD" },
      { m: "BarraCuda 120 SSD 1TB", t: "SATA SSD" },
      { m: "FireCuda 120 SSD 1TB", t: "SATA SSD" },
      { m: "IronWolf 110 SSD 480GB", t: "SATA SSD" },
      { m: "FireCuda 510 SSD 500GB", t: "NVMe" },
      { m: "FireCuda 520 SSD 1TB", t: "NVMe" },
      { m: "FireCuda 530 SSD 1TB", t: "NVMe" },
      { m: "FireCuda 530 SSD 2TB", t: "NVMe" },
      { m: "IronWolf 525 SSD 1TB", t: "NVMe" },
      { m: "BarraCuda Q5 SSD 1TB", t: "NVMe" }
    ],
    serialGen: () => ['Z', 'W', 'S'][Math.floor(Math.random() * 3)] + getAlNum(7)
  },
  {
    vendor: "Crucial",
    models: [
      { m: "CT500MX500SSD1 500GB", t: "SATA SSD" },
      { m: "CT1000MX500SSD1 1TB", t: "SATA SSD" },
      { m: "CT2000MX500SSD1 2TB", t: "SATA SSD" },
      { m: "CT480BX500SSD1 480GB", t: "SATA SSD" },
      { m: "CT1000BX500SSD1 1TB", t: "SATA SSD" },
      { m: "CT500P2SSD8 500GB", t: "NVMe" },
      { m: "CT1000P3SSD8 1TB", t: "NVMe" },
      { m: "CT1000P3PSSD8 1TB", t: "NVMe" },
      { m: "CT1000P5PSSD8 1TB", t: "NVMe" },
      { m: "CT2000P5PSSD8 2TB", t: "NVMe" }
    ],
    serialGen: () => '2' + Math.floor(Math.random() * 5).toString() + getAlNum(10)
  }
];

export const pcDB: Record<string, PcBrand> = {
  dell: {
    n: "Dell Inc.",
    bv: "Dell Inc.",
    macs: ["00:14:22", "18:66:DA", "90:B1:1C"],
    m: [
      { p: "OptiPlex 3080 Micro", f: "OptiPlex", s: "09C3", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "Haswell", name: "Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz" }, { base: "Haswell", name: "Intel(R) Core(TM) i7-4790K CPU @ 4.00GHz" }] },
      { p: "OptiPlex 7070 Tower", f: "OptiPlex", s: "08DE", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "Broadwell", name: "Intel(R) Core(TM) i5-5675C CPU @ 3.10GHz" }, { base: "Broadwell", name: "Intel(R) Core(TM) i7-5775C CPU @ 3.30GHz" }] },
      { p: "OptiPlex 7080 Micro", f: "OptiPlex", s: "09C4", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "OptiPlex 9020 SFF", f: "OptiPlex", s: "05A4", bp: "", t: "H", compatibleCpus: [{ base: "Haswell", name: "Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz" }, { base: "Haswell", name: "Intel(R) Core(TM) i7-4790K CPU @ 4.00GHz" }] },
      { p: "Inspiron 3880", f: "Inspiron", s: "09B4", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "Broadwell", name: "Intel(R) Core(TM) i5-5675C CPU @ 3.10GHz" }, { base: "Broadwell", name: "Intel(R) Core(TM) i7-5775C CPU @ 3.30GHz" }] },
      { p: "Inspiron 3891", f: "Inspiron", s: "0A64", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Inspiron 3910", f: "Inspiron", s: "0B20", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "XPS 8940 Desktop", f: "XPS Desktop", s: "09C5", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "XPS 8950 Desktop", f: "XPS Desktop", s: "0A73", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "XPS 8960 Desktop", f: "XPS Desktop", s: "0B6A", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Alienware Aurora R10", f: "Alienware Desktop", s: "098F", bp: "", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 5 5600X 6-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 7 5800X 8-Core Processor" }] },
      { p: "Alienware Aurora R11", f: "Alienware Desktop", s: "09C6", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Alienware Aurora R12", f: "Alienware Desktop", s: "0A40", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Alienware Aurora R13", f: "Alienware Desktop", s: "0A81", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Alienware Aurora R14", f: "Alienware Desktop", s: "0A99", bp: "", t: "G", compatibleCpus: [{ base: "EPYC-Milan", name: "AMD Ryzen 9 5900X 12-Core Processor" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5950X 16-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 5 5600X 6-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 7 5800X 8-Core Processor" }] },
      { p: "Alienware Aurora R15", f: "Alienware Desktop", s: "0B34", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Alienware Aurora R16", f: "Alienware Desktop", s: "0BB5", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "G5 Gaming Desktop 5090", f: "Dell G Series", s: "0950", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "Haswell", name: "Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz" }, { base: "Haswell", name: "Intel(R) Core(TM) i7-4790K CPU @ 4.00GHz" }] },
      { p: "G5 Gaming Desktop 5000", f: "Dell G Series", s: "09D2", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "XPS 8930 Gaming Base", f: "XPS Desktop", s: "085A", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "Broadwell", name: "Intel(R) Core(TM) i5-5675C CPU @ 3.10GHz" }, { base: "Broadwell", name: "Intel(R) Core(TM) i7-5775C CPU @ 3.30GHz" }] }
    ],
    v: (m) => "1." + Math.floor(Math.random() * 20) + "." + Math.floor(Math.random() * 5),
    sGen: () => getAlNum(7)
  },
  hp: {
    n: "HP",
    bv: "HP",
    macs: ["00:1F:29", "FC:15:B4", "C0:59:9E"],
    m: [
      { p: "HP EliteDesk 800 G4 TWR", f: "EliteDesk", s: "Default String", bp: "Q01", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP EliteDesk 800 G5 SFF", f: "EliteDesk", s: "Default String", bp: "Q02", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP EliteDesk 800 G6 Mini", f: "EliteDesk", s: "Default String", bp: "Q03", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP ProDesk 400 G7 MT", f: "ProDesk", s: "Default String", bp: "P04", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP ProDesk 600 G5 SFF", f: "ProDesk", s: "Default String", bp: "P05", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP ProDesk 600 G6 Microtower", f: "ProDesk", s: "Default String", bp: "P06", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP Pavilion Desktop TP01", f: "Pavilion", s: "Default String", bp: "T01", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP Pavilion Desktop M01", f: "Pavilion", s: "Default String", bp: "M01", t: "H", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 5 5600X 6-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 7 5800X 8-Core Processor" }] },
      { p: "HP Envy Desktop TE01", f: "Envy", s: "Default String", bp: "E01", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP Envy Desktop TE02", f: "Envy", s: "Default String", bp: "E02", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "OMEN by HP 25L Gaming Desktop", f: "OMEN", s: "Default String", bp: "O25", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }] },
      { p: "OMEN by HP 30L Gaming Desktop", f: "OMEN", s: "Default String", bp: "O30", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "EPYC-Rome", name: "AMD Ryzen 5 5600X 6-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 7 5800X 8-Core Processor" }] },
      { p: "OMEN by HP 40L Gaming Desktop", f: "OMEN", s: "Default String", bp: "O40", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5900X 12-Core Processor" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5950X 16-Core Processor" }] },
      { p: "OMEN by HP 45L Gaming Desktop", f: "OMEN", s: "Default String", bp: "O45", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP Victus 15L Gaming Desktop TG02", f: "Victus", s: "Default String", bp: "V15", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }] },
      { p: "HP Pavilion Gaming Desktop TG01", f: "Pavilion Gaming", s: "Default String", bp: "P01G", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP Pavilion Gaming Desktop 690", f: "Pavilion Gaming", s: "Default String", bp: "P690", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "OMEN Obelisk Desktop 875", f: "OMEN", s: "Default String", bp: "O875", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "OMEN 25L Desktop GT15", f: "OMEN", s: "Default String", bp: "O15", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "HP Victus TG01 Gaming", f: "Victus", s: "Default String", bp: "V01", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }] }
    ],
    v: (m) => m.bp + " Ver. 02." + Math.floor(Math.random() * 50),
    sGen: () => "5CD" + getAlNum(7)
  },
  lenovo: {
    n: "LENOVO",
    bv: "LENOVO",
    macs: ["88:AE:DD", "3C:97:0E", "50:7B:9D"],
    m: [
      { p: "ThinkCentre M720q", f: "ThinkCentre", s: "Lenovo_MT_10T7_BU", bp: "M1", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ThinkCentre M720s", f: "ThinkCentre", s: "Lenovo_MT_10ST_BU", bp: "M2", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ThinkCentre M920q", f: "ThinkCentre", s: "Lenovo_MT_10RR_BU", bp: "M3", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ThinkCentre M920t", f: "ThinkCentre", s: "Lenovo_MT_10SM_BU", bp: "M4", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ThinkCentre M70s Gen 2", f: "ThinkCentre", s: "Lenovo_MT_11DB_BU", bp: "M5", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ThinkCentre M70q Gen 2", f: "ThinkCentre", s: "Lenovo_MT_11N3_BU", bp: "M6", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "IdeaCentre 3", f: "IdeaCentre", s: "Lenovo_MT_90NB_BU", bp: "I3", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }] },
      { p: "IdeaCentre 5", f: "IdeaCentre", s: "Lenovo_MT_90Q3_BU", bp: "I5", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }] },
      { p: "ThinkStation P340", f: "ThinkStation", s: "Lenovo_MT_30DK_BU", bp: "S01", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ThinkStation P620", f: "ThinkStation", s: "Lenovo_MT_30E0_BU", bp: "S07", t: "H", compatibleCpus: [{ base: "EPYC-Rome", name: "AMD Ryzen 5 5600X 6-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 7 5800X 8-Core Processor" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5900X 12-Core Processor" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5950X 16-Core Processor" }] },
      { p: "Legion T5 26AMR5", f: "Legion", s: "Lenovo_MT_90RC_BU", bp: "L5", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 5 5600X 6-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 7 5800X 8-Core Processor" }] },
      { p: "Legion T7 34IMZ5", f: "Legion", s: "Lenovo_MT_90Q8_BU", bp: "L7", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Legion T530-28ICB", f: "Legion", s: "Lenovo_MT_90L3_BU", bp: "L53", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Legion T730-28ICO", f: "Legion", s: "Lenovo_MT_90JF_BU", bp: "L73", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Legion Tower 5i", f: "Legion", s: "Lenovo_MT_90NC_BU", bp: "L5I", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Legion Tower 7i", f: "Legion", s: "Lenovo_MT_90Q9_BU", bp: "L7I", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "IdeaCentre Gaming 5", f: "IdeaCentre", s: "Lenovo_MT_90RW_BU", bp: "IG5", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "IdeaCentre Gaming 5i", f: "IdeaCentre", s: "Lenovo_MT_90N9_BU", bp: "IG5I", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "LOQ Tower 17IRB8", f: "LOQ", s: "Lenovo_MT_90VH_BU", bp: "LOQ", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Legion C530 Cube", f: "Legion", s: "Lenovo_MT_90L2_BU", bp: "LC5", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "Broadwell", name: "Intel(R) Core(TM) i5-5675C CPU @ 3.10GHz" }, { base: "Broadwell", name: "Intel(R) Core(TM) i7-5775C CPU @ 3.30GHz" }] }
    ],
    v: (m) => m.bp + getAlNum(2) + "KT" + Math.floor(Math.random() * 40) + "A",
    sGen: () => "PC" + getAlNum(6)
  },
  asus: {
    n: "ASUSTeK COMPUTER INC.",
    bv: "American Megatrends Inc.",
    macs: ["04:92:26", "00:1E:8C"],
    m: [
      { p: "ExpertCenter D500SC", f: "ExpertCenter", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ExpertCenter D700TA", f: "ExpertCenter", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ExpertCenter D900SA", f: "ExpertCenter", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "VivoPC M32CD", f: "VivoPC", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ASUS S500TC", f: "ASUS Desktop", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ASUS S500SA", f: "ASUS Desktop", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Prime Z390-A System", f: "Prime Series", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Prime Z490-P Desktop", f: "Prime Series", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Prime Z590-A Desktop", f: "Prime Series", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "Prime B560-PLUS System", f: "Prime Series", s: "All", bp: "", t: "H", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "Haswell", name: "Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz" }, { base: "Haswell", name: "Intel(R) Core(TM) i7-4790K CPU @ 4.00GHz" }] },
      { p: "ROG Strix GA15", f: "ROG Strix Desktop", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 5 5600X 6-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 7 5800X 8-Core Processor" }] },
      { p: "ROG Strix GA35", f: "ROG Strix Desktop", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5900X 12-Core Processor" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5950X 16-Core Processor" }] },
      { p: "ROG Strix GT15", f: "ROG Strix Desktop", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ROG Strix G10DK", f: "ROG Strix Desktop", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }] },
      { p: "ROG Strix G15CF", f: "ROG Strix Desktop", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ROG Strix G35CG", f: "ROG Strix Desktop", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "TUF Gaming GT501 PC", f: "TUF Gaming", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }, { base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }] },
      { p: "TUF Gaming B550-PLUS PC", f: "TUF Gaming", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 5 5600X 6-Core Processor" }, { base: "EPYC-Rome", name: "AMD Ryzen 7 5800X 8-Core Processor" }] },
      { p: "ROG Maximus XIII Hero PC", f: "ROG", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "Skylake-Client", name: "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz" }, { base: "Skylake-Client", name: "Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz" }] },
      { p: "ROG Crosshair VIII Dark Hero", f: "ROG", s: "All", bp: "", t: "G", compatibleCpus: [{ base: "EPYC", name: "AMD Ryzen 5 3600 6-Core Processor" }, { base: "EPYC", name: "AMD Ryzen 7 3700X 8-Core Processor" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5900X 12-Core Processor" }, { base: "EPYC-Milan", name: "AMD Ryzen 9 5950X 16-Core Processor" }] }
    ],
    v: (m) => (1000 + Math.floor(Math.random() * 2000)).toString(),
    sGen: () => getAlNum(15)
  }
};
