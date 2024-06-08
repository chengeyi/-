<template>
  <div id="homeContainer" class="container">
    <div class="content">
      <div class="topTitle">
        <div class="tag">
          <img src="./../assets/img/logo-color.jpg" alt="">
        </div>
        <div class="srs">
          系統需求規格書(SRS)
        </div>
      </div>

      <section class="sectionFunc">
        <form action="">
          <div>
            <label for="funcName">功能名稱</label>
            <input id="funcName" type="text" v-model="funcName">
          </div>
          <div class="textareaContent">
            <label for="funcDescription">需求說明</label>
            <textarea v-model="funcSimpleDescription" name="" id="funcDescription" cols="60" rows="5"></textarea>
          </div>
          <div class="radioContent">
            <label for="">功能類別</label>
            <span>
              <input checked id="frontDesk" type="radio" value="1" name="funcType">
              <label for="frontDesk">前台</label>
            </span>
            <span>
              <input id="backstage" type="radio" value="2" name="funcType">
              <label for="backstage">後台</label>
            </span>
            <span>
              <input id="schedule" type="radio" value="3" name="funcType">
              <label for="schedule">排程</label>
            </span>
            <span>
              <input id="DataConnection" type="radio" value="4" name="funcType">
              <label for="DataConnection">資料介接</label>
            </span>
          </div>
          <div class="radioContent">
            <label for="">作業方式</label>
            <span>
              <input checked id="set" type="radio" value="1" name="devType">
              <label for="set">設定</label>
            </span>
            <span>
              <input id="dev" type="radio" value="2" name="devType">
              <label for="dev">作業</label>
            </span>
            <span>
              <input id="Sign" type="radio" value="3" name="devType">
              <label for="Sign">簽核</label>
            </span>
            <span>
              <input id="report" type="radio" value="4" name="devType">
              <label for="report">報表</label>
            </span>
            <span>
              <input id="schedule" type="radio" value="5" name="devType">
              <label for="schedule">排程</label>
            </span>
            <span>
              <input id="other" type="radio" value="6" name="devType">
              <label for="other">其他</label>
            </span>
          </div>
          <div class="radioContent">
            <label for="">呈現方式</label>
            <span>
              <input checked id="table" type="radio" value="1" name="viewType">
              <label for="table">表格</label>
            </span>
            <span>
              <input id="form" type="radio" value="2" name="viewType">
              <label for="form">表單</label>
            </span>
          </div>
          <div class="radioContent">
            <label for="initType">查詢方式</label>
            <span>
              <input checked id="default" type="radio" value="1" name="initType">
              <label for="default">預帶</label>
            </span>
            <span>
              <input id="queryBtn" type="radio" value="2" name="initType">
              <label for="queryBtn">查詢按鈕</label>
            </span>
          </div>
          <div>
            <label for="initType">客製代號</label>
            <input id="initType" type="text">
          </div>
        </form>
        <div class="guidelines">
          <img src="../assets/img/guidelines-rafiki.png" alt="">
        </div>
      </section>

      <section class="modifyHistory">
        <div class="modifyHistoryHead">
          <div class="modifyHistoryHeadTitle">
            <span class="dot">•</span>
            <span class="title">歷次修改說明</span>
          </div>
          <div class="modifyHistoryHeadBtn">
            <button @click="newModifyHistory()" type="button" class="btn btn-primary">新增</button>
            <button @click="recoverModifyHistory()" type="button" class="btn btn-secondary">復原</button>
          </div>
        </div>

        <div class="tableBlock">
          <div class="tableBody">
            <div class="main">
              <div class="outMain">
                <table class="employee-table">
                  <thead>
                    <tr>
                      <th style="text-align: center;">版本</th>
                      <th style="text-align: center;">日期</th>
                      <th style="text-align: center;">提出人員</th>
                      <th style="text-align: center;">SA</th>
                      <th style="text-align: center;">日期</th>
                      <th style="text-align: center;">修改說明</th>
                      <th style="text-align: center;">刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in modifyHistoryData" :key="item.index">
                      <td data-label="版本" style="text-align: center;">
                        <input type="text" v-model="item.Version">
                      </td>
                      <td data-label="日期" style="text-align: center;">
                        <input type="date" value="2010-09-08">
                      </td>
                      <td data-label="提出人員" style="text-align: center;">
                        <input type="text" v-model="item.Requester">
                      </td>
                      <td data-label="SA" style="text-align: center;">
                        <select name="" id="">
                          <option value=""></option>
                          <option value="1">TOny</option>
                        </select>
                      </td>
                      <td data-label="PR" style="text-align: center;">
                        <select name="" id="">
                          <option value=""></option>
                          <option value="1">TOny</option>
                        </select>
                      </td>
                      <td data-label="修改說明" style="text-align: center;">
                        <textarea :value="item.ModifyNote" name="" id="funcDescription" cols="35" rows="3"></textarea>
                      </td>
                      <td data-label="刪除" style="text-align: center;">
                        <button @click="delModifyHistory(index)" type="button" class="btn btn-danger">刪除</button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </section>

      <!-- 整體功能說明 -->
      <section class="funcDescription">
        <div class="funcDescriptionHead">
          <span class="dot">•</span>
          <span class="title">功能說明</span>
        </div>
        <div>
          <textarea v-model="funcDescription" name="" id="" cols="70" rows="5"></textarea>
        </div>
      </section>

      <!-- 查詢功能說明 -->
      <section class="queryRule">
        <div class="queryRuleHead">
          <div class="queryRuleHeadTitle">
            <span class="dot">•</span>
            <span class="title">查詢功能說明</span>
          </div>
        </div>
        <div class="tableBlock mb-2">
          <div class="tableBody">
            <div class="main">
              <div class="outMain">
                <table class="employee-table">
                  <thead class="anTable">
                    <tr>
                      <th id="name" colspan="2">查詢欄位設置</th>
                      <th id="name" colspan="">
                        <div class="queryRuleHeadBtn">
                          <button @click="newQueryField()" type="button" class="btn btn-primary">新增</button>
                          <button @click="recoverQueryField()" type="button" class="btn btn-secondary">復原</button>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center;">查詢欄位名稱</th>
                      <th style="text-align: center;">查詢欄位說明</th>
                      <th style="text-align: center;">刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in queryField" :key="item.index">
                      <td data-label="版本" style="text-align: center;">
                        <input type="text" v-model="item.Name">
                      </td>
                      <td data-label="修改說明" style="text-align: center;">
                        <textarea :value="item.Note" name="" id="funcDescription" cols="35" rows="3"></textarea>
                      </td>
                      <td data-label="刪除" style="text-align: center;">
                        <button @click="delQueryField(index)" type="button" class="btn btn-danger">刪除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="tableBlock mb-2">
          <div class="tableBody">
            <div class="main">
              <div class="outMain">
                <table class="employee-table">
                  <thead class="anTable">
                    <tr>
                      <th id="name" colspan="2">查詢列表欄位設置</th>
                      <th id="name" colspan="">
                        <div class="queryRuleHeadBtn">
                          <button @click="newResultSetField()" type="button" class="btn btn-primary">新增</button>
                          <button @click="recoverResultSetField()" type="button" class="btn btn-secondary">復原</button>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center;">查詢列表欄位名稱</th>
                      <th style="text-align: center;">查詢列表欄位說明</th>
                      <th style="text-align: center;">刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in resultSetField" :key="item.index">
                      <td data-label="版本" style="text-align: center;">
                        <input type="text" v-model="item.Name">
                      </td>
                      <td data-label="修改說明" style="text-align: center;">
                        <textarea :value="item.Note" name="" id="funcDescription" cols="35" rows="3"></textarea>
                      </td>
                      <td data-label="刪除" style="text-align: center;">
                        <button @click="delResultSetField(index)" type="button" class="btn btn-danger">刪除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="tableBlock mb-2">
          <div class="tableBody">
            <div class="main">
              <div class="outMain">
                <table class="employee-table">
                  <thead class="anTable">
                    <tr>
                      <th id="name" colspan="2">查詢列表排序設置</th>
                      <th id="name" colspan="">
                        <div class="queryRuleHeadBtn">
                          <button @click="newResultsetSort()" type="button" class="btn btn-primary">新增</button>
                          <button @click="recoverResultsetSort()" type="button" class="btn btn-secondary">復原</button>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center;">查詢列表排序欄位名稱</th>
                      <th style="text-align: center;">查詢列表排序欄位說明</th>
                      <th style="text-align: center;">刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in resultsetSort" :key="item.index">
                      <td data-label="版本" style="text-align: center;">
                        <input type="text" v-model="item.Name">
                      </td>
                      <td data-label="修改說明" style="text-align: center;">
                        <textarea :value="item.Note" name="" id="funcDescription" cols="35" rows="3"></textarea>
                      </td>
                      <td data-label="刪除" style="text-align: center;">
                        <button @click="delResultsetSort(index)" type="button" class="btn btn-danger">刪除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue';

const formData: Ref<object> = ref({});
const funcName: Ref<string> = ref('');
const funcSimpleDescription: Ref<string> = ref('');
//歷次修改次數  
const modifyHistoryData: Ref<Array<any>> = ref([]);
//保留原資料
const originalModifyHistoryData: Ref<Array<any>> = ref([]);
//新增修改紀錄
function newModifyHistory(): void {
  let Modify: object = {
    Version: '',
    Date: '2024-06-06',
    Requester: '',
    SystemAnalyst: '',
    Programmer: '',
    ModifyNote: '',
  }

  modifyHistoryData.value.push(Modify);
}
//復原
function recoverModifyHistory(): void {
  modifyHistoryData.value = JSON.parse(JSON.stringify(originalModifyHistoryData.value));
}
//刪除歷次修改歷史紀錄
function delModifyHistory(idx: number): void {
  modifyHistoryData.value.splice(idx, 1)
}

//功能說明
const funcDescription: Ref<string> = ref('');

//查詢功能說明(查詢欄位設置)
const queryField: Ref<Array<any>> = ref([]);
const originalQueryField: Ref<Array<any>> = ref([]);
//新增
function newQueryField(): void {
  let queryFieldObj: object = {
    Name: '',
    Note: ''
  }

  queryField.value.push(queryFieldObj);
}
//復原
function recoverQueryField(): void {
  queryField.value = JSON.parse(JSON.stringify(originalQueryField.value));
}
//刪除查詢欄位設置
function delQueryField(idx: number): void {
  queryField.value.splice(idx, 1)
}

//查詢列表
const resultSetField: Ref<Array<any>> = ref([]);
const originalResultSetField: Ref<Array<any>> = ref([]);
//新增
function newResultSetField(): void {
  let resultSetFieldObj: object = {
    Name: '',
    Note: ''
  }

  resultSetField.value.push(resultSetFieldObj);
}
//復原
function recoverResultSetField(): void {
  resultSetField.value = JSON.parse(JSON.stringify(originalResultSetField.value));
}
//刪除查詢欄位設置
function delResultSetField(idx: number): void {
  resultSetField.value.splice(idx, 1)
}

//查詢列表排序設置
const resultsetSort: Ref<Array<any>> = ref([]);
const originalResultsetSort: Ref<Array<any>> = ref([]);
//新增
function newResultsetSort(): void {
  let resultsetSortObj: object = {
    Name: '',
    Note: ''
  }

  resultsetSort.value.push(resultsetSortObj);
}
//復原
function recoverResultsetSort(): void {
  resultsetSort.value = JSON.parse(JSON.stringify(originalResultsetSort.value));
}
//刪除查詢欄位設置
function delResultsetSort(idx: number): void {
  resultsetSort.value.splice(idx, 1)
}

onMounted(() => {
  let object = {
    "ProjectNo": "專案代號(下拉選單，API給，單選)",
    "CustomerId": "客戶代號(下拉選單，API給，單選)",
    "ModifyUser": "員工編號(下拉選單，API給，單選)",
    "Function": {
      "Name": "功能名稱(文字輸入)",
      "FuncSimpleDescription": "需求簡易說明(多行輸入)",
      "FuncType": 1, //功能類別(RADIO單選) 1.前台 2.後台 3.排程 4.資料介接                
      "DevType": 1, //作業方式(RADIO單選) 1.設定 2.作業 3.簽核 4.報表 5.排程 6.其他     
      "ViewType": 1, //呈現方式(RADIO單選) 1.表格 2.表單                                  
      "InitType": 1, //查詢方式(RADIO單選) 1.預帶 2.查詢按鈕                              
      "PackageName": "客製代號",
      "ModifyHistory": [ //歷次修改紀錄
        {
          "Version": "版本(單行輸入)",
          "Date": "日期(萬年曆)",
          "Requester": "客戶窗口(單行輸入)",
          "SystemAnalyst": "員工編號(下拉選單，API給，單選)",
          "Programmer": "員工編號(下拉選單，API給，單選)",
          "ModifyNote": "此次修改說明(多行輸入)"
        },
        {
          "Version": "v.1.0.2",
          "Date": "20240313",
          "Requester": "中國信託 李承辦",
          "SystemAnalyst": "員工編號(下拉選單單選)",
          "Programmer": "員工編號(下拉選單單選)",
          "ModifyNote": "因為某年某月每天他說了甚麼XXX"
        }
      ],
      "FuncDescription": "整體功能說明(多行輸入)",
      "QueryRule": { //	查詢功能說明
        "QueryField": [ //	查詢欄位設置
          {
            "Name": "查詢欄位名稱(單行輸入)",
            "Note": "查詢條件說明(多行輸入)"
          },
          {
            "Name": "查詢欄位名稱(單行輸入)",
            "Note": "查詢條件說明(多行輸入)"
          },
          {
            "Name": "查詢欄位名稱(單行輸入)",
            "Note": "查詢條件說明(多行輸入)"
          }
        ],
        "ResultSetField": [ //	查詢列表欄位設置
          {
            "Name": "查詢列表欄位名稱(單行輸入)",
            "Note": "查詢列表欄位說明(多行)"
          },
          {
            "Name": "查詢列表欄位名稱(單行輸入)",
            "Note": "查詢列表欄位說明(多行)"
          },
          {
            "Name": "查詢列表欄位名稱(單行輸入)",
            "Note": "查詢列表欄位說明(多行)"
          }
        ],
        "ResultSetSort": [ //	查詢列表排序設置
          {
            "Name": "排序欄位名稱(單行)",
            "Note": "查詢結果排序說明(多行)"
          },
          {
            "Name": "排序欄位名稱(單行)",
            "Note": "查詢結果排序說明(多行)"
          },
          {
            "Name": "排序欄位名稱(單行)",
            "Note": "查詢結果排序說明(多行)"
          }
        ]
      },
      "EntryViewRule": { //	功能頁面設置
        "EntryViewField": [ //	功能頁面有哪些欄位(不包含表格)
          {
            "Name": "欄位名稱(單行)",
            "Note": "欄位說明(多行)"
          },
          {
            "Name": "欄位名稱(單行)",
            "Note": "欄位說明(多行)"
          },
          {
            "Name": "欄位名稱(單行)",
            "Note": "欄位說明(多行)"
          }
        ],
        "EntryViewTable": [ //	功能頁面有哪些表格(不包含欄位)
          {
            "TableName": "table1", //	表格命名(ex:table1)
            "TableContent": {
              "Field": [ //	這個表格有哪些欄位
                {
                  "Name": "欄位名稱(單行)",
                  "Note": "欄位說明(多行)"
                },
                {
                  "Name": "欄位名稱(單行)",
                  "Note": "欄位說明(多行)"
                },
                {
                  "Name": "欄位名稱(單行)",
                  "Note": "欄位說明(多行)"
                }
              ],
              "Button": [ //	這個表格有多少按鈕
                {
                  "Name": "按鈕名稱(單行)",
                  "Note": "按鈕說明(多行)"
                },
                {
                  "Name": "按鈕名稱(單行)",
                  "Note": "按鈕說明(多行)"
                },
                {
                  "Name": "按鈕名稱(單行)",
                  "Note": "按鈕說明(多行)"
                }
              ]
            }
          },
          {
            "TableName": "table2",
            "TableContent": {
              "Field": [
                {
                  "Name": "欄位名稱(單行)",
                  "Note": "欄位說明(多行)"
                },
                {
                  "Name": "欄位名稱(單行)",
                  "Note": "欄位說明(多行)"
                },
                {
                  "Name": "欄位名稱(單行)",
                  "Note": "欄位說明(多行)"
                }
              ],
              "Button": [
                {
                  "Name": "按鈕名稱(單行)",
                  "Note": "按鈕說明(多行)"
                },
                {
                  "Name": "按鈕名稱(單行)",
                  "Note": "按鈕說明(多行)"
                },
                {
                  "Name": "按鈕名稱(單行)",
                  "Note": "按鈕說明(多行)"
                }
              ]
            }
          }
        ],
        "EntryViewButton": [ //	功能頁面有哪些按鈕
          {
            "Name": "按鈕名稱(單行)",
            "Note": "按鈕說明(多行)"
          },
          {
            "Name": "按鈕名稱(單行)",
            "Note": "按鈕說明(多行)"
          },
          {
            "Name": "按鈕名稱(單行)",
            "Note": "按鈕說明(多行)"
          }
        ],
        "EntryViewTreeTable": [ //	功能頁面是否有樹狀表格(ex:組織圖)
          {
            "TreeName": "Tree1", //	樹狀表格名稱
            "TreeContent": [
              {
                "Name": "Lv1", //	第一階層名稱
                "Field": [ //	第一階層的欄位名稱(只會一個欄位)
                  {
                    "Name": "欄位名稱(單行)",
                    "Note": "欄位說明(多行)"
                  }
                ],
                "Button": [ //	第一階層的按鈕
                  {
                    "Name": "按鈕名稱(單行)",
                    "Note": "按鈕說明(多行)"
                  },
                  {
                    "Name": "按鈕名稱(單行)",
                    "Note": "按鈕說明(多行)"
                  },
                  {
                    "Name": "按鈕名稱(單行)",
                    "Note": "按鈕說明(多行)"
                  }
                ]
              },
              {
                "Name": "Lv2",
                "Field": [
                  {
                    "Name": "欄位名稱(單行)",
                    "Note": "欄位說明(多行)"
                  }
                ],
                "Button": [
                  {
                    "Name": "按鈕名稱(單行)",
                    "Note": "按鈕說明(多行)"
                  },
                  {
                    "Name": "按鈕名稱(單行)",
                    "Note": "按鈕說明(多行)"
                  },
                  {
                    "Name": "按鈕名稱(單行)",
                    "Note": "按鈕說明(多行)"
                  }
                ]
              }
            ]
          }
        ]
      },
      "DialogRule": [ //	彈跳視窗
        {
          "DialogName": "頁簽名稱(單行)", //	彈跳視窗名稱
          "DialogDescription": "頁簽說明(多行)", //	彈跳視窗說明
          "DialogContent": { //	彈跳視窗內容物
            "Field": [ //	彈跳視窗有哪些欄位
              {
                "Name": "頁簽欄位名稱(單行)",
                "Note": "欄位說明(多行)"
              },
              {
                "Name": "頁簽欄位名稱(單行)",
                "Note": "欄位說明(多行)"
              }
            ],
            "Table": [ //	彈跳視窗有哪些表格
              {
                "TableName": "table1", //	彈跳視窗表格名稱
                "TableContent": {
                  "Field": [ //	彈跳視窗表格有哪些欄位
                    {
                      "Name": "頁簽表格欄位名稱(單行)",
                      "Note": "表格欄位說明(多行)"
                    },
                    {
                      "Name": "頁簽表格欄位名稱(單行)",
                      "Note": "表格欄位說明(多行)"
                    },
                    {
                      "Name": "頁簽表格欄位名稱(單行)",
                      "Note": "表格欄位說明(多行)"
                    }
                  ],
                  "Button": [ //	彈跳視窗的表格有哪些按鈕
                    {
                      "Name": "頁簽表格按鈕名稱(單行)",
                      "Note": "表格按鈕說明(多行)"
                    },
                    {
                      "Name": "頁簽表格按鈕名稱(單行)",
                      "Note": "表格按鈕說明(多行)"
                    },
                    {
                      "Name": "頁簽表格按鈕名稱(單行)",
                      "Note": "表格按鈕說明(多行)"
                    }
                  ]
                }
              }
            ],
            "Button": [ //	彈跳視窗有哪些按鈕
              {
                "Name": "頁簽按鈕名稱(單行)",
                "Note": "頁簽按鈕說明(多行)"
              },
              {
                "Name": "頁簽按鈕名稱(單行)",
                "Note": "頁簽按鈕說明(多行)"
              },
              {
                "Name": "頁簽按鈕名稱(單行)",
                "Note": "頁簽按鈕說明(多行)"
              }
            ]
          }
        }
      ],
      "PageRule": [ //	其他頁面設置
        {
          "PageName": "其他頁面名稱(單行)", //	其他頁面名稱
          "PageDescription": "其他頁面說明(多行)", //	其他頁面說明
          "PageContent": {
            "Field": [ //	其他頁面有哪些欄位
              {
                "Name": "其他頁面欄位名稱(單行)",
                "Note": "欄位說明(多行)"
              },
              {
                "Name": "其他頁面欄位名稱(單行)",
                "Note": "欄位說明(多行)"
              }
            ],
            "Table": [ //	其他頁面有哪些表格
              {
                "TableName": "table1", //	其他頁面表格的名稱
                "TableContent": {
                  "Field": [ //	其他頁面表格的欄位有哪些
                    {
                      "Name": "其他頁面欄位名稱(單行)",
                      "Note": "表格欄位說明(多行)"
                    },
                    {
                      "Name": "其他頁面欄位名稱(單行)",
                      "Note": "表格欄位說明(多行)"
                    },
                    {
                      "Name": "其他頁面欄位名稱(單行)",
                      "Note": "表格欄位說明(多行)"
                    }
                  ],
                  "Button": [ //	其他頁面表格的按鈕有哪些
                    {
                      "Name": "其他頁面表格按鈕名稱(單行)",
                      "Note": "表格按鈕說明(多行)"
                    },
                    {
                      "Name": "其他頁面表格按鈕名稱(單行)",
                      "Note": "表格按鈕說明(多行)"
                    },
                    {
                      "Name": "其他頁面表格按鈕名稱(單行)",
                      "Note": "表格按鈕說明(多行)"
                    }
                  ]
                }
              }
            ],
            "Button": [ //	其他頁面的按鈕有哪些
              {
                "Name": "其他頁面按鈕名稱(單行)",
                "Note": "其他頁面按鈕說明(多行)"
              },
              {
                "Name": "其他頁面按鈕名稱(單行)",
                "Note": "其他頁面按鈕說明(多行)"
              },
              {
                "Name": "其他頁面按鈕名稱(單行)",
                "Note": "其他頁面按鈕說明(多行)"
              }
            ]
          }
        }
      ],
      "FlowRule": { //	簽核設置
        "ListField": [ //	簽核列表欄位有哪些
          {
            "Name": "列表欄位名稱(單行)",
            "Note": "列表欄位說明(多行)"
          },
          {
            "Name": "列表欄位名稱(單行)",
            "Note": "列表欄位說明(多行)"
          },
          {
            "Name": "列表欄位名稱(單行)",
            "Note": "列表欄位說明(多行)"
          }
        ],
        "FlowState": [ //	簽核節點有哪些
          {
            "Name": "簽核節點名稱(單行)",
            "Note": "簽核節點說明(多行)"
          },
          {
            "Name": "簽核節點名稱(單行)",
            "Note": "簽核節點說明(多行)"
          },
          {
            "Name": "簽核節點名稱(單行)",
            "Note": "簽核節點說明(多行)"
          }
        ],
        "FlowCommand": [ //	簽核按鈕有哪些
          {
            "Name": "簽核按鈕名稱(單行)",
            "Note": "簽核按鈕說明(多行)"
          },
          {
            "Name": "簽核按鈕名稱(單行)",
            "Note": "簽核按鈕說明(多行)"
          },
          {
            "Name": "簽核按鈕名稱(單行)",
            "Note": "簽核按鈕說明(多行)"
          }
        ]
      }
    }
  }

  formData.value = object;
  funcName.value = object.Function.Name;
  funcSimpleDescription.value = object.Function.FuncSimpleDescription;
  modifyHistoryData.value = object.Function.ModifyHistory;
  originalModifyHistoryData.value = JSON.parse(JSON.stringify(object.Function.ModifyHistory));

  funcDescription.value = object.Function.FuncDescription;

  queryField.value = object.Function.QueryRule.QueryField;
  originalQueryField.value = JSON.parse(JSON.stringify(object.Function.QueryRule.QueryField));

  resultSetField.value = object.Function.QueryRule.ResultSetField;
  originalResultSetField.value = JSON.parse(JSON.stringify(object.Function.QueryRule.ResultSetField));

  resultsetSort.value = object.Function.QueryRule.ResultSetSort;
  originalResultsetSort.value = JSON.parse(JSON.stringify(object.Function.QueryRule.ResultSetSort));
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/all.scss";

#homeContainer {

  input:not([type="radio"]) {
    outline: none;
    border: none;
    background-color: #d5d5d55e;
    height: 35px;
    border-radius: 5px;
    transition: .3s;
    width: 500px;

    &:focus {
      outline: none;
      transition: .3s;
      background-color: rgb(213 213 213 / 79%);
      padding: 5px;
      width: 510px;
      box-shadow: -1px 7px 7px -11px;
    }
  }

  textarea {
    outline: none;
    border: none;
    background-color: #d5d5d55e;
    border-radius: 5px;
    transition: .3s;

    &:focus {
      outline: none;
      transition: .3s;
      background-color: rgb(213 213 213 / 79%);
      padding: 5px;
      box-shadow: -1px 7px 7px -11px;
    }
  }

  button {
    font-family: cursive;
    padding: 1px 3px 1px 3px;
  }

  // height: 89vh;
  background-color: #FFFFFF;
  border: 2px solid rgba(9, 10, 11, .05);
  border-radius: .25rem;
  box-shadow: 10px 12px 7px -11px;

  .content {
    .topTitle {
      border-bottom: 1px solid rgba(9, 10, 11, .05);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0 10px 0;
      margin-bottom: 50px;

      .tag {
        img {
          width: 100px;
        }
      }

      .srs {
        font-size: 13px;
        opacity: 0.3;
      }
    }

    .sectionFunc {
      height: 100%;
      padding: 10px;
      display: flex;
      gap: 15%;

      .guidelines {
        width: 30%;

        img {
          width: 100%;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        div {
          label {
            margin-right: 20px;
            font-family: cursive;
            font-weight: 900;
            color: #9f9f9f;
          }
        }

        .textareaContent {
          display: flex;
        }

        .radioContent {
          span {
            label {
              color: #787878;
              margin-left: 5px;
            }
          }
        }

      }
    }

    .modifyHistory,
    .queryRule {
      height: 100%;
      padding: 10px;

      // button {
      //   font-family: cursive;
      //   padding: 1px 3px 1px 3px;
      // }

      .modifyHistoryHeadBtn,
      .queryRuleHeadBtn {
        display: flex;
        gap: 10px;
        justify-content: end;
      }

      .modifyHistoryHead,
      .queryRuleHead {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .title {
        font-family: cursive;
        font-weight: 900;
        color: #9f9f9f;
        margin-left: 10px;
      }

      .dot {
        color: #9f9f9f;
      }
    }

    .funcDescription {
      padding: 10px;

      .title {
        font-family: cursive;
        font-weight: 900;
        color: #9f9f9f;
        margin-left: 10px;
      }

      .dot {
        color: #9f9f9f;
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    .tableBlock {
      padding: 10px;
      height: calc(100% - 103px);
      border-radius: 10px;
      border: 1px solid rgba(9, 10, 11, 0.05);
    }

    .tableBody {
      overflow: hidden;
      height: 100%;
    }

    .tableBody .main .outMain {
      overflow: auto;
      min-height: 200px;
      max-height: 500px;
      margin: 0 0 40px 0;

      #name {
        background-color: #e9e9e900;
        font-family: cursive;
        font-weight: 900;
        color: #9f9f9f;
      }
    }

    th,
    td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
      text-align: left;
      word-break: keep-all;
      white-space: pre;

      input {
        outline: none;
        border: none;
        background-color: #d5d5d55e;
        height: 35px;
        border-radius: 5px;
        transition: .3s;
        width: 100%;
        text-align: center;

        &:focus {
          outline: none;
          transition: .3s;
          background-color: rgb(213 213 213 / 79%);
          padding: 5px;
          box-shadow: -1px 7px 7px -11px;
          width: 101%;
        }
      }

      textarea {
        outline: none;
        border: none;
        background-color: #d5d5d55e;
        border-radius: 5px;

        &:focus {
          outline: none;
          transition: .3s;
          background-color: rgb(213 213 213 / 79%);
          padding: 5px;
          box-shadow: -1px 7px 7px -11px;
        }
      }
    }

    th {
      background-color: #4384fd;
      position: sticky;
      top: 0;
      z-index: 1;
      font-weight: bold;
      color: #fff;
      padding: 12px 10px;
      font-family: cursive;
      font-weight: 900;
    }

    tbody tr {
      background: #FFF;
    }

    tbody tr:nth-child(even) {
      background: #e9e9e9;

      td {

        input,
        textarea {
          background-color: #fff;
        }
      }
    }
  }


  @include media-breakpoint-down(md) {

    .content {

      .sectionFunc {
        border: 1px solid black;
        display: block;

        form {
          div {
            input:not([type="radio"]) {
              width: 100%;

              &:focus {
                width: 101%;
              }
            }
          }

          .textareaContent {
            display: flex;
            flex-direction: column
          }

          .radioContent {
            >label {
              width: 100%;
            }

            span {
              label {
                color: #787878;
                margin-left: 5px;
              }
            }
          }
        }

        .guidelines {
          display: none;
        }
      }

      // .modifyHistory {
      .tableBody .main>div .outMain {
        border: 1px solid #c0c0c0;
      }


      .tableBody .main>div {
        max-height: none;
      }

      .tableBody .main .title {
        background-color: var(--primary-color);
        color: #FFF;
      }

      body {

        margin: 0;
        padding: 0;

      }

      .container {
        margin: 0;
        border-radius: inherit;
      }



      tbody tr:nth-child(even) {
        background: #FFF;
      }

      table {
        border: 0;
      }

      thead {
        display: none;
      }

      .anTable {
        display: block;

        tr:nth-child(2) {
          display: none;
        }
      }

      tr {
        border-bottom: 2px solid #ddd;
        display: block;
      }

      tbody tr:nth-child(even) {
        background: #e9e9e9;
      }


      td {
        border-bottom: none;
        display: flex;
        text-align: left;
        padding-left: 20px;
        position: relative;
        flex-direction: column;
        gap: 5px;
        font-size: 14px;
        padding: 15px 10px 15px 20px;
      }

      td::before {
        content: attr(data-label);
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        color: #969696;
      }

      // }

      textarea {
        width: 100%;
      }
    }
  }
}
</style>