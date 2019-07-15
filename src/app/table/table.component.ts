import { Component, OnInit } from "@angular/core";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "table.component.html"
})
export class TableComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;
  ngOnInit() {
    this.tableData1 = {
      headerRow: ["ID", "Name", "Country", "City", "Salary"],
      dataRows: [
        ["1", "Dakota Rice", "Niger", "Oud-Turnhout", "R36,738"],
        ["2", "Minerva Hooper", "Curaçao", "Sinaai-Waas", "R23,789"],
        ["3", "Sage Rodriguez", "Netherlands", "Baileux", "R56,142"],
        ["4", "Philip Chaney", "Korea, South", "Overland Park", "R38,735"],
        ["5", "Doris Greene", "Malawi", "Feldkirchen in Kärnten", "R63,542"],
        ["6", "Mason Porter", "Chile", "Gloucester", "R78,615"]
      ]
    };
    this.tableData2 = {
      headerRow: ["ID", "Name", "Salary", "Country", "City"],
      dataRows: [
        ["1", "Dakota Rice", "R36,738", "Niger", "Oud-Turnhout"],
        ["2", "Minerva Hooper", "R23,789", "Curaçao", "Sinaai-Waas"],
        ["3", "Sage Rodriguez", "R56,142", "Netherlands", "Baileux"],
        ["4", "Philip Chaney", "R38,735", "Korea, South", "Overland Park"],
        ["5", "Doris Greene", "R63,542", "Malawi", "Feldkirchen in Kärnten"],
        ["6", "Mason Porter", "R78,615", "Chile", "Gloucester"]
      ]
    };
  }
}
