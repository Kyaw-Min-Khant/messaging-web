import { useEffect, useState } from "react";

const initialStaticRows = [
  {
    testing: "Total",
    column0: "total0",
    column1: "1",
    column2: "2",
    column3: "3",
    column4: "4",
    column5: "5",
  },
  {
    testing: "Total 1",
    column0: "total1",
    column1: "1",
    column2: "2",
    column3: "3",
    column4: "4",
    column5: "5",
  },
  {
    testing: "Total 2",
    column0: "total2",
    column1: "1",
    column2: "2",
    column3: "3",
    column4: "4",
    column5: "5",
  },
];

const createRow = (index: number) => ({
  testing: `Test ${index + 1}`,
  column0: `col${index}`,
  column1: "",
  column2: "",
  column3: "",
  column4: "",
  column5: "",
});

const Home = () => {
  const [cell, setCell] = useState(1);
  const [batteryLine, setBatteryLine] = useState<any[]>([]);
  const [selectedColumn, setSelectedColumn] = useState("column1");
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    if (cell) {
      const dynamicRows = batteryLine.slice(
        0,
        batteryLine.length - initialStaticRows.length
      );
      console.log(dynamicRows, "Dynamic Row");
      const staticRows = batteryLine.slice(-initialStaticRows.length);

      let newDynamicRows: any[] = [];

      if (cell > dynamicRows.length) {
        const additionalRows = Array.from(
          { length: cell - dynamicRows.length },
          (_, index) => createRow(dynamicRows.length + index)
        );
        newDynamicRows = [...dynamicRows, ...additionalRows];
      } else if (cell < dynamicRows.length) {
        newDynamicRows = dynamicRows.slice(0, cell);
      } else {
        newDynamicRows = dynamicRows;
      }

      const finalStaticRows = staticRows.length
        ? staticRows
        : initialStaticRows;
      console.log(newDynamicRows, "New Dynamic Row");
      setBatteryLine([...newDynamicRows, ...finalStaticRows]);
    }
  }, [cell]);
  console.log(cell, "Cell");

  const handleUpdateColumn = () => {
    const updated = batteryLine.map((row) => ({
      ...row,
      [selectedColumn]: form[row.column0] ?? row[selectedColumn],
    }));

    setBatteryLine(updated);
  };

  return (
    <div className="min-h-screen p-5">
      <div>
        <input
          type="number"
          className="border p-2 rounded-lg"
          defaultValue={1}
          onChange={(e) => setCell(Number(e.target.value))}
        />
      </div>

      <div className="mt-5 flex gap-3 items-center flex-wrap">
        <select
          className="border p-2 rounded-lg"
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
        >
          <option value="column1">column1</option>
          <option value="column2">column2</option>
          <option value="column3">column3</option>
          <option value="column4">column4</option>
          <option value="column5">column5</option>
        </select>

        {batteryLine.map((item, idx) => (
          <input
            key={idx}
            className="border p-2 rounded-lg"
            placeholder="Enter value"
            value={form[item.column0] ?? item[selectedColumn]}
            onChange={(e) =>
              setForm((prev: any) => ({
                ...prev,
                [item.column0]: e.target.value,
              }))
            }
          />
        ))}

        <button
          onClick={handleUpdateColumn}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Update
        </button>
      </div>

      <div className="mt-5">
        {batteryLine.map((item, idx) => (
          <div key={idx} className="mb-2 flex gap-x-5 px-5">
            <p className="w-[70px] text-center">{item.testing}</p>
            <p className="w-[70px] text-center">{item.column0}</p>
            <p className="w-[70px] text-center">{item.column1}</p>
            <p className="w-[70px] text-center">{item.column2}</p>
            <p className="w-[70px] text-center">{item.column3}</p>
            <p className="w-[70px] text-center">{item.column4}</p>
            <p className="w-[70px] text-center">{item.column5}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
