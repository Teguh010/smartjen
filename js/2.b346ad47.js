(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{8041:function(t,e,s){"use strict";var i=s("cb9a"),a=s.n(i);a.a},"8b24":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{background:"#F0FFFC"}},[t.tampil?i("div",{staticClass:"sidebar bg-primary "},[t._m(0),t._m(1),t._m(2),i("div",[i("div",{staticClass:"q-px-xl"},[i("q-img",{staticStyle:{"image-size":"10px"},attrs:{alt:"smartjen logo",src:s("b868")}})],1)])]):t._e(),i("div",[i("div",[t.tampil?i("div",{staticClass:"content "},[i("div",{staticClass:"q-gutter-md q-py-md"},[i("q-icon",{attrs:{name:"fas fa-circle",color:"blue",size:"10px;"}}),i("q-icon",{attrs:{name:"fas fa-circle",color:"grey-4",size:"10px;"}}),i("q-icon",{attrs:{name:"fas fa-circle",color:"grey-4",size:"10px;"}})],1),i("div",{staticClass:"form-container"},[i("q-form",{staticClass:"q-sm-md shadow-3",staticStyle:{background:"#F0FFFC"},on:{submit:t.clickquestions}},[i("div",{staticClass:"col q-pt-lg"},[i("div",{staticClass:"q-pl-md q-pt-md question-bank",staticStyle:{"margin-bottom":"-10px"}},[t._v("\n                  Question Bank\n                ")]),i("div",{staticClass:"row justify-left q-pt-md"},[i("div",{staticClass:"col"},[i("q-radio",{attrs:{val:"public",label:"Public Question"},model:{value:t.questionBank,callback:function(e){t.questionBank=e},expression:"questionBank"}})],1),i("div",{staticClass:"col "},[i("q-radio",{attrs:{val:"private",label:"Private Question"},model:{value:t.questionBank,callback:function(e){t.questionBank=e},expression:"questionBank"}})],1)]),i("hr",{staticClass:"doted"})]),i("div",{staticClass:"q-pl-sm q-pb-sm q-pt-sm"},[t._v("\n                Number Of Question\n              ")]),i("div",{staticClass:"row q-px-sm "},[i("div",{staticClass:"col"},[i("q-btn",{staticClass:"button-number",class:{active:1==t.active},staticStyle:{color:"grey"},attrs:{label:"1",outline:""},on:{click:function(e){t.setActive1(),t.setNumber()}}})],1),i("div",{staticClass:"col"},[i("q-btn",{staticClass:"button-number",class:{active:2==t.active},staticStyle:{color:"grey"},attrs:{label:"2",outline:""},on:{click:function(e){t.setActive2(),t.setNumber()}}})],1),i("div",{staticClass:"col"},[i("q-btn",{staticClass:"button-number",class:{active:3==t.active},staticStyle:{color:"grey"},attrs:{label:"3",outline:""},on:{click:function(e){t.setActive3(),t.setNumber()}}})],1),i("div",{staticClass:"col"},[i("q-btn",{staticClass:"button-number",class:{active:4==t.active},staticStyle:{color:"grey"},attrs:{label:"4",outline:""},on:{click:function(e){t.setActive4(),t.setNumber()}}})],1),i("div",{staticClass:"col"},[i("q-btn",{staticClass:"button-number",class:{active:5==t.active},staticStyle:{color:"blue"},attrs:{label:"5",outline:""},on:{click:function(e){t.setActive5(),t.setNumber()}}})],1),i("div",{staticClass:"col-md-6 col-sm-3"},[i("q-select",{staticClass:"bg-grey-6 q-px-md",staticStyle:{"border-radius":"3px",height:"37px"},attrs:{disable:"",label:"custom number (premium)","dropdown-icon":"edit",borderless:"",options:t.optionsId},model:{value:t.questionsId,callback:function(e){t.questionsId=e},expression:"questionsId"}})],1)]),i("div",[i("div",{staticClass:"q-pt-md"},[i("hr",{staticClass:"doted"})]),i("div",{staticClass:"row q-px-md q-gutter-sm"},[i("div",{staticClass:"col-xs-12 col-sm-6 col-md-4"},[i("div",{staticClass:"q-pb-md q-pt-sm"},[t._v("\n                      Topics\n                    ")]),i("q-select",{staticClass:"bg-grey-6 q-px-sm",staticStyle:{"border-radius":"3px",height:"40px"},attrs:{borderless:"",options:t.topicsOptions},model:{value:t.topicsOptionsSelected,callback:function(e){t.topicsOptionsSelected=e},expression:"topicsOptionsSelected"}})],1),i("div",{staticClass:"col-xs-12 col-sm-6 col-md-4"},[i("div",{staticClass:"q-pb-md q-pt-sm"},[t._v("\n                      Learning Objectives\n                    ")]),i("q-select",{staticClass:"bg-grey-6 q-px-sm",staticStyle:{"border-radius":"3px",height:"40px"},attrs:{borderless:"",options:t.learningObjectivesOptions},model:{value:t.learningObjectivesOptionsSelected,callback:function(e){t.learningObjectivesOptionsSelected=e},expression:"learningObjectivesOptionsSelected"}})],1),i("div",{staticClass:"col-xs-12 col-sm-6 col-md-4"},[i("div",{staticClass:"q-pb-md q-pt-sm"},[t._v("\n                      Level & Subject\n                    ")]),i("q-select",{staticClass:"bg-grey-6 q-px-sm",staticStyle:{"border-radius":"3px",height:"40px"},attrs:{borderless:"",options:t.levelnSubjectOptions},model:{value:t.levelnSubjectOptionsSelected,callback:function(e){t.levelnSubjectOptionsSelected=e},expression:"levelnSubjectOptionsSelected"}})],1)])]),i("div",{staticClass:"q-pt-md"},[i("hr",{staticClass:"doted"})]),i("div",{staticClass:"q-pl-md q-pt-md"},[t._v("\n                Question Types\n              ")]),i("div",{staticClass:"q-px-sm row justify-left"},[i("div",{staticClass:"q-gutter-sm row"},[i("q-radio",{attrs:{val:"MCQ",label:"MCQ"},model:{value:t.questionsTypesMcq,callback:function(e){t.questionsTypesMcq=e},expression:"questionsTypesMcq"}})],1),i("div",{staticClass:"q-gutter-sm row q-pl-xl"},[i("q-radio",{attrs:{val:"Non-MCQ",label:"Non-MCQ"},model:{value:t.questionsTypesMcq,callback:function(e){t.questionsTypesMcq=e},expression:"questionsTypesMcq"}})],1)]),i("div",{staticClass:"q-pt-md"},[i("hr",{staticClass:"doted"})]),i("div",{staticClass:"q-pl-md  q-pt-md"},[t._v("\n                Dificullity Level\n              ")]),i("div",{staticClass:"q-pa-sm row justify-left"},[i("div",{staticClass:"q-gutter-sm row"},[i("q-checkbox",{model:{value:t.difficultyLevelOptionsEasy,callback:function(e){t.difficultyLevelOptionsEasy=e},expression:"difficultyLevelOptionsEasy"}}),i("p",{staticClass:"q-pt-md"},[t._v("Easy")])],1),i("div",{staticClass:"q-gutter-sm row "},[i("q-checkbox",{model:{value:t.difficultyLevelOptionsNormal,callback:function(e){t.difficultyLevelOptionsNormal=e},expression:"difficultyLevelOptionsNormal"}}),i("p",{staticClass:"q-pt-md"},[t._v("Normal")])],1),i("div",{staticClass:"q-gutter-sm row "},[i("q-checkbox",{model:{value:t.difficultyLevelOptionsHard,callback:function(e){t.difficultyLevelOptionsHard=e},expression:"difficultyLevelOptionsHard"}}),i("p",{staticClass:"q-pt-md"},[t._v("Hard")])],1),i("div",{staticClass:"q-gutter-sm row "},[i("q-checkbox",{model:{value:t.difficultyLevelOptionsGenius,callback:function(e){t.difficultyLevelOptionsGenius=e},expression:"difficultyLevelOptionsGenius"}}),i("p",{staticClass:"q-pt-md"},[t._v("Genius")])],1)]),i("div",{staticClass:"q-pl-md q-pb-lg q-pt-md"},[i("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)])],1)]):i("div",{staticClass:"question-container"},[i("div",[i("q-dialog",{model:{value:t.openFlag,callback:function(e){t.openFlag=e},expression:"openFlag"}},[i("Flag",{model:{value:t.openFlag,callback:function(e){t.openFlag=e},expression:"openFlag"}})],1)],1),i("div",{staticClass:" q-pt-md  q-gutter-md q-pb-md"},[i("div",{staticClass:"q-gutter-md"},[i("q-icon",{attrs:{name:"fas fa-circle",color:"grey-4",size:"10px;"}}),i("q-icon",{attrs:{name:"fas fa-circle",color:"blue",size:"10px;"}}),i("q-icon",{attrs:{name:"fas fa-circle",color:"grey-4",size:"10px;"}})],1),t.step3?i("div",{staticClass:"q-gutter-md"},[i("q-icon",{attrs:{name:"fas fa-circle",color:"grey-4",size:"10px;"}}),i("q-icon",{attrs:{name:"fas fa-circle",color:"grey-4",size:"10px;"}}),i("q-icon",{attrs:{name:"fas fa-circle",color:"blue",size:"10px;"}})],1):t._e()]),i("q-card",{staticClass:"header-content"},[i("q-card-actions",{staticClass:"bg-primary",attrs:{align:"between"}},[i("div",{},[i("div",{staticClass:"text-h6 text-white"},[t._v("Generate Question")])]),i("div",{staticClass:" q-gutter-sm "},[i("q-btn",{staticClass:"bg-red text-capitalize",staticStyle:{width:"90px"},attrs:{flat:"",dense:"",color:"black",label:"flag"},on:{click:function(e){t.openFlag=!0}}}),i("q-btn",{staticClass:"text-capitalize",staticStyle:{width:"90px",background:"#93F0EB"},attrs:{flat:"",dense:"",color:"black",label:"Mqc"}}),i("q-btn",{staticClass:"text-capitalize",staticStyle:{width:"120px",background:"#62F883"},attrs:{flat:"",dense:"",color:"black",label:"Regenerated All"},on:{click:function(e){return t.regenerated()}}})],1)])],1),i("div",[i("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.questions,(function(e,s){return i("q-card",{key:e.id,staticClass:"content-question q-my-md"},[i("q-card-actions",{staticStyle:{"background-color":"#FFF1BD"},attrs:{align:"between"}},[i("div",{staticStyle:{"max-width":"100px","border-radius":"20px",height:"30px",width:"120px",background:"#FED33B"}},[i("q-select",{staticClass:"q-px-lg",staticStyle:{height:"38px !important"},attrs:{"input-style":"color:white;",behavior:"menu",borderless:"",options:t.optionsTrain,value:s+1},on:{input:function(e){return t.moveArrayItemToNewIndex(s,e-1)}}})],1),i("div",{staticClass:" text-right q-gutter-sm "},[i("div",{staticClass:"text-red"},[t._v("\n                      [Whole Numbers] Addition and Substraction of Whole\n                      Numbers\n                    ")]),i("div",{staticClass:"text-right text-red"},[t._v("\n                      ( 2 Mark, Normal )\n                    ")])])]),i("q-card-actions",{attrs:{align:"between"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col q-pa-sm"},[i("q-item-label",{staticClass:"text-question text-black text-body1"},[t._v(t._s(e.descriptions))])],1),i("div",{staticClass:"btn-question q-pt-sm col"},[i("div",{staticClass:"text-right q-gutter-sm"},[i("q-btn",{staticClass:"bg-red text-capitalize",staticStyle:{width:"90px"},attrs:{flat:"",dense:"",color:"white",label:"flag"},on:{click:function(e){t.openFlag=!0}}}),i("q-btn",{staticClass:"text-capitalize",staticStyle:{width:"90px",background:"#93F0EB"},attrs:{flat:"",dense:"",color:"black",label:"Mqc"}}),i("q-btn",{staticClass:"text-capitalize",staticStyle:{width:"90px",background:"#62F883"},attrs:{flat:"",dense:"",color:"black",label:"Regenerated"},on:{click:function(e){return t.regenerated()}}})],1)])])])],1)})),1)],1),i("div",{staticClass:"q-py-lg btn-back text-right"},[i("q-btn",{staticStyle:{width:"90px"},attrs:{label:"back",color:"primary"},on:{click:t.backClick}})],1)],1)])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row q-gutter-x-md justify-center q-pt-lg"},[s("h2",{staticClass:"text-white"},[t._v("Smart")]),s("h2",{staticClass:"text-bold text-white"},[t._v("Jen")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-top":"30px"}},[s("hr",{staticClass:"hr-smart"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pt-md"},[s("div",{staticClass:"b q-pa-lg text-white"},[t._v("\n          With the latest technology of SmartGen now, you can ‘smartly\n          generate’ practice questions online instead of traditional way. Do\n          not worry about the quiz being too easy or too difficult because\n          each topic is preset with thousands of questions in different ranges\n          of difficulty. Simply click on the topic, level and adjust the scale\n          of difficulty and you will find practice questions specifically\n          targeted at your levels of need. You can also save these questions,\n          assign them to students and generate progress reports later.\n        ")])])}],n=(s("fb6a"),s("ddb0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-card",{staticStyle:{width:"100%"}},[s("div",{staticClass:"bg-red"},[s("div",{staticClass:"q-pa-md text-white",staticStyle:{"font-size":"18px"}},[t._v("\n        Flag Question\n      ")])]),s("div",[s("div",{staticClass:"q-pa-md text-grey"},[t._v("\n        Hi there! Thanks for bringing the issue to us. Appreciate if you can\n        provide more information about this error on this question !\n      ")])]),s("q-card-section",[s("div",{staticClass:"column q-gutter-x-sm"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 text-grey-9",staticStyle:{"font-size":"18px"}},[t._v("\n            Issue:\n          ")]),s("div",{staticClass:"col-8 bg-grey-3",staticStyle:{"border-radius":"10px"}},[s("q-input",{staticClass:"q-px-md",attrs:{borderless:""},model:{value:t.titleInput,callback:function(e){t.titleInput=e},expression:"titleInput"}})],1)]),s("div",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 text-grey-9",staticStyle:{"font-size":"18px"}},[t._v("\n              Comments:\n            ")]),s("div",{staticClass:"col-8 bg-grey-3",staticStyle:{"border-radius":"10px"}},[s("q-input",{staticClass:"q-px-md",attrs:{type:"textarea",borderless:""},model:{value:t.inputDescriptions,callback:function(e){t.inputDescriptions=e},expression:"inputDescriptions"}})],1)])])])]),s("q-card-section",[s("div",{staticClass:"row q-gutter-x-sm"},[s("div",{staticClass:"col-8"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width bg-red",staticStyle:{height:"50px","border-radius":"10px"},attrs:{flat:"",color:"white",label:"Cancel"}})],1),s("div",{staticClass:"col"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width bg-blue",staticStyle:{height:"50px","border-radius":"10px"},attrs:{flat:"",color:"white",label:"Submit"},on:{click:t.closeModal}})],1)])])],1)],1)}),l=[],c={data(){return{titleInput:"",inputDescriptions:""}},methods:{closeModal(){this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})}}},o=c,r=s("2877"),d=s("f09f"),u=s("a370"),p=s("27f9"),m=s("9c40"),v=s("7f67"),y=s("eebe"),b=s.n(y),q=Object(r["a"])(o,n,l,!1,null,null,null),f=q.exports;b()(q,"components",{QCard:d["a"],QCardSection:u["a"],QInput:p["a"],QBtn:m["a"]}),b()(q,"directives",{ClosePopup:v["a"]});var h={components:{Flag:f},data(){return{openFlag:!1,question:"test",step3:!1,active:null,issetActive:"",optionsTrain:[],model:null,dense:!1,denseOpts:!1,val:!0,tampil:!0,questions:[],optionsId:[6,7,8,9],levelnSubjectOptions:["All","Primary 1 Math","Primary 1 Science","Secondary 2 Science"],questionBank:"Public",topicsOptions:["All","Any Standart"],anyTopicsOptions:["All","Any Topics"],learningObjectivesOptions:["All","Any Heuristic"],questionsTypesMcq:"MCQ",difficultyLevelOptionsEasy:!0,difficultyLevelOptionsNormal:!1,difficultyLevelOptionsHard:!1,difficultyLevelOptionsGenius:!1,questionlist:[{id:1,levelnSubject:"Primary 1 Math",questionBank:"Public",topics:"Any Standart",anyTopics:"AnyTopics",descriptions:"first index Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",learningObjectives:"Any Heuristic",questionTypesMqc:!0,difficultyLevelEasy:!0},{id:2,levelnSubject:"Primary 1 Math",questionBank:"Public",topics:"Any Standart",anyTopics:"AnyTopics",descriptions:"second index Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",learningObjectives:"Any Heuristic",questionTypesMqc:!0,difficultyLevelEasy:!0},{id:3,levelnSubject:"Primary 1 Math",questionBank:"Public",topics:"Any Standart",anyTopics:"AnyTopics",descriptions:"third index Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",learningObjectives:"Any Heuristic",questionTypesMqc:!0,difficultyLevelEasy:!0},{id:4,levelnSubject:"Primary 1 Math",questionBank:"Public",topics:"Any Standart",anyTopics:"AnyTopics",descriptions:"Forth index Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",learningObjectives:"Any Heuristic",questionTypesMqc:!0,difficultyLevelEasy:!0},{id:5,levelnSubject:"Primary 1 Math",questionBank:"Public",topics:"Any Standart",anyTopics:"AnyTopics",descriptions:"FIfth Index Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",learningObjectives:"Any Heuristic",questionTypesMqc:!0,difficultyLevelEasy:!0},{id:6,levelnSubject:"Primary 1 Math",questionBank:"Public",topics:"Any Standart",anyTopics:"AnyTopics",descriptions:"Sixth Index Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",learningObjectives:"Any Heuristic",questionTypesMqc:!0,difficultyLevelEasy:!0},{id:7,levelnSubject:"Primary 1 Math",questionBank:"Public",topics:"Any Standart",anyTopics:"AnyTopics",descriptions:"Seventh index Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",learningObjectives:"Any Heuristic",questionTypesMqc:!0,difficultyLevelEasy:!0}],levelnSubjectOptionsSelected:"All",topicsOptionsSelected:"All",learningObjectivesOptionsSelected:"All",questionsId:null}},computed:{filteredquestionlist:function(){const t=this.levelnSubjectOptionsSelected,e=this.topicsOptionsSelected,s=this.learningObjectivesOptionsSelected;return"All"===t&&"All"===e&&"All"===s?this.questionlist:this.questionlist.filter((function(i){return("All"===t||i.levelnSubject===t)&&("All"===e||i.topics===e)&&("All"===s||i.learningObjectives===s)}))}},methods:{clickquestions(){this.questions=this.filteredquestionlist.slice(0,this.questionsId),this.tampil=!1;const t=this.filteredquestionlist.slice(0,this.questionsId),e=t.length,s=Array.from({length:e},(t,e)=>e+1);console.log(s),this.optionsTrain=s},backClick(){this.tampil=!0,this.questions=[]},moveArrayItemToNewIndex(t,e){console.log(t,e);const s=[...this.questions],i=s[t];s[t]=s[e],s[e]=i,this.questions=s},setActive1(){this.issetActive=1},setActive2(){this.issetActive=2},setActive3(){this.issetActive=3},setActive4(){this.issetActive=4},setActive5(){this.issetActive=5},setNumber(){this.questionsId=this.issetActive,this.active=this.questionsId,console.log("questionsId",this.questionsId),this.questionsId>5&&(this.issetActive="")},buttonClickOne(){const t=this.buttons;let e;for(e in t)console.log("btn",t[e])},regenerated(){this.random=Math.floor(3*Math.random())+0,this.question=this.questionlist[this.random],console.log(this.question)}}},g=h,x=(s("8041"),s("068f")),C=s("0016"),k=s("0378"),S=s("3786"),w=s("8f8e"),A=s("ddd8"),O=s("24e8"),I=s("4b7e"),L=s("4983"),j=s("0170"),_=Object(r["a"])(g,i,a,!1,null,null,null);e["default"]=_.exports;b()(_,"components",{QImg:x["a"],QIcon:C["a"],QForm:k["a"],QRadio:S["a"],QCheckbox:w["a"],QBtn:m["a"],QSelect:A["a"],QDialog:O["a"],QCard:d["a"],QCardActions:I["a"],QScrollArea:L["a"],QItemLabel:j["a"]})},b868:function(t,e,s){t.exports=s.p+"img/smartReading.431d20ea.png"},cb9a:function(t,e,s){}}]);