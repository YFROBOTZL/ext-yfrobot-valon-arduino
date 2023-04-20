/** 
 * @file yfrobot
 * @brief YFROBOT's sensors Mind+ library.
 * @n This is a MindPlus graphics programming extension for YFROBOT's module.
 * 
 * @copyright    YFROBOT,2022
 * @copyright    MIT Lesser General Public License
 * 
 * @author [email](yfrobot@qq.com)
 * @date  2022-11-10
*/

enum LEDONOFF {
    //% block="OFF"
    HIGH,
    //% block="ON"
    LOW
}

enum LEDN {
    //% block="D1"
    0,
    //% block="D2"
    1
}

enum CARDIR {
    //% block="ADVANCE"
    0,
    //% block="BACKWARD"
    1,
    //% block="TURNRIGHT"
    2,
    //% block="TURNLEFT"
    3,
    //% block="BIGTURNRIGHT"
    4,
    //% block="BIGTURNLEFT"
    5
}

enum MOTORN {
    //% block="RIGHT"
    0,
    //% block="LEFT"
    1
}

enum MOTORDIR {
    //% block="FORWARD"
    0,
    //% block="REVERSE"
    1
}

enum LFSENSORSNUM {
    //% blockId="LFS_1" block="●○○○○"
    0,
    //% blockId="LFS_2" block="○●○○○"
    1,
    //% blockId="LFS_3" block="○○●○○"
    2,
    //% blockId="LFS_4" block="○○○●○"
    3,
    //% blockId="LFS_5" block="○○○○●"
    4
}

enum LFSENSORSNUM_MX {
    //% blockId="LFS_MAX" block="最大值"
    calibratedMaximumOn,
    //% blockId="LFS_MIN" block="最小值"
    calibratedMinimumOn
}

enum LFSENSORSNUM_M {
    //% blockId="LFS_11" block="1"
    0,
    //% blockId="LFS_22" block="2"
    1,
    //% blockId="LFS_33" block="3"
    2,
    //% blockId="LFS_44" block="4"
    3,
    //% blockId="LFS_55" block="5"
    4
}

enum PSSTATE {
    //% block="○●○"
    S0,
    //% block="●○○"
    S1,
    //% block="○○●"
    S2,
    //% block="●●●"
    S3,
    //% block="○○○"
    S4,
    //% block="●●○"
    S5,
    //% block="○●●"
    S6,
}

enum IrButton {
    //% block="A"
    0xFFA25D,
    //% block="B"
    0xFF629D,
    //% block="C"
    0xFFE21D,
    //% block="D"
    0xFF22DD,
    //% block="︿"
    0xFF02FD,
    //% block="E"
    0xFFC23D,
    //% block="＜"
    0xFFE01F,
    //% block="۞"
    0xFFA857,
    //% block="＞"
    0xFF906F,
    //% block="0"
    0xFF6897,
    //% block="﹀"
    0xFF9867,
    //% block="F"
    0xFFB04F,
    //% block="1"
    0xFF30CF,
    //% block="2"
    0xFF18E7,
    //% block="3"
    0xFF7A85,
    //% block="4"
    0xFF10EF,
    //% block="5"
    0xFF38C7,
    //% block="6"
    0xFF5AA5,
    //% block="7"
    0xFF42BD,
    //% block="8"
    0xFF4AB5,
    //% block="9"
    0xFF52AD,
}

enum IrButtonHandle {
    //% block="↑"
    0xE49B11EE,
    //% block="↓"
    0xE49B916E,
    //% block="←"
    0xE49B817E,
    //% block="→"
    0xE49BA15E,
    //% block="M1"
    0xE49BE916,
    //% block="M2"
    0xE49B6996,
    //% block="A"
    0xE49B21DE,
    //% block="B"
    0xE49B01FE,
}

enum ValonBEAT {
    //% block="1/2"
    500,
    //% block="1/4"
    250,
    //% block="1/8"
    125,
    //% block="整拍"
    1000,
    //% block="双拍"
    2000,
    //% block="停止"
    0,
}

enum BT_C_VALUE {
    //% block="BUTTON"
    0x65,
    //% block="JOYSTICK"
    0x70,
    //% block="COLORLIGHT"
    0x64,
    //% block="SWLED"
    0x66,
    //% block="SWBuzzer"
    0x67,
    //% block="SWRelay"
    0x68,
    //% block="SWOther"
    0x69
}

enum BTVALUE {
    //% block="BTNVALUE"
    BTN,
    //% block="JOY_LEFT"
    JOYL,
    //% block="JOY_RIGHT"
    JOYR,
    //% block="COLOR_MODE"
    COLOR_MODE,
    //% block="COLOR_RED"
    COLOR_RED,
    //% block="COLOR_GREEN"
    COLOR_GREEN,
    //% block="COLOR_BLUE"
    COLOR_BLUE,
    //% block="SWLED_VALUE"
    SWLED_VALUE,
    //% block="SWBuzzer_VALUE"
    SWBuzzer_VALUE,
    //% block="SWRelay_VALUE"
    SWRelay_VALUE,
    //% block="SWOther_VALUE"
    SWOther_VALUE
}

enum S_BAUD {
    //% block="9600"
    9600,
    //% block="115200"
    115200
}



//% color="#0eb83a" iconWidth=50 iconHeight=40
namespace valon {

    //% block="set [LED] output [LEDSTATE]" blockType="command"
    //% LED.shadow="dropdown" LED.options="LEDN" LED.defl="LEDN.D1"
    //% LEDSTATE.shadow="dropdown" LEDSTATE.options="LEDONOFF" LEDSTATE.defl="LEDONOFF.HIGH"
    export function LED(parameter: any, block: any) {
        let led = parameter.LED.code;
        let ledState = parameter.LEDSTATE.code;
        Generator.addCode(`digitalWrite(${led},${ledState});`);
    }
        
    let valonoTone = `ValonTone`;
    //% block="蜂鸣器音调为[TONE]节拍为[BEAT]" blockType="command"
    //% TONE.shadow="note" TONE.defl=247
    //% BEAT.shadow="dropdown" BEAT.options="ValonBEAT"" BEAT.defl="ValonBEAT.500"
    export function buzzerTone(parameter: any, block: any) {
        let tone = parameter.TONE.code;
        let beat = parameter.BEAT.code;
        Generator.addInclude(`Include_DFRobot_Libraries`, `#include <DFRobot_Libraries.h>`)
        Generator.addObject(`DFRobot_Tone`, `DFRobot_Tone`, `${valonoTone};`);
        Generator.addCode(`${valonoTone}.play(11, ${tone}, ${beat});`);
    }


    //% block="Valon robot at [SPEED] speed [DIR]" blockType="command"
    //% SPEED.shadow="range"   SPEED.params.min=0    SPEED.params.max=255    SPEED.defl=200
    //% DIR.shadow="dropdown" DIR.options="CARDIR" DIR.defl="CARDIR.0"
    export function carDrive(parameter: any, block: any) {
        let speed = parameter.SPEED.code;
        let dir = parameter.DIR.code;
        Generator.addInclude(`definevaloncar`, `PROGMEM void carDrive(int dir, int speed); // valon car 控制函数`)
        Generator.addInclude(`definevaloncarFun`, `// valon car 控制函数\n`+
            `void carDrive(int dir, int speed) {\n`+
            `  if (dir == 0) {          // 前进\n`+
            `    motorDrive(0, speed, 0);\n`+
            `    motorDrive(1, speed, 0);\n`+
            `  } else if (dir == 1) {   // 后退\n`+
            `    motorDrive(0, speed, 1);\n`+
            `    motorDrive(1, speed, 1);\n`+
            `  } else if (dir == 2) {   // 右转\n`+
            `    motorDrive(0, speed/2, 0);\n`+
            `    motorDrive(1, speed, 0);\n`+
            `  } else if (dir == 3) {   // 左转\n`+
            `    motorDrive(0, speed, 0);\n`+
            `    motorDrive(1, speed/2, 0);\n`+
            `  } else if (dir == 4) {   // 全右转\n`+
            `    motorDrive(0, 0, 0);\n`+
            `    motorDrive(1, speed, 0);\n`+
            `  } else if (dir == 5) {   // 全左转\n`+
            `    motorDrive(0, speed, 0);\n`+
            `    motorDrive(1, 0, 0);\n`+
            `  }\n`+
            `}`
        );

        Generator.addInclude(`definevalonmotor`, `PROGMEM void motorDrive(int mot, int speed, int dir); // valon motor 控制函数`)
        Generator.addInclude(`definevalonmotorFun`, `// valon motor 控制函数\n`+
            `void motorDrive(int mot, int speed, int dir) {\n`+
            `  if (mot == 0) {    // 右电机\n`+
            `    if (dir == 0) {  // 正转\n`+
            `      digitalWrite(9, LOW);\n`+
            `      analogWrite(6, speed);\n`+
            `    } else {         // 反转\n`+
            `      digitalWrite(9, HIGH);\n`+
            `      analogWrite(6, speed);\n`+
            `    }\n`+
            `  } else {           // 左电机\n`+
            `    if (dir == 0) {  // 正转\n`+
            `      digitalWrite(4, LOW);\n`+
            `      analogWrite(5, speed);\n`+
            `    } else {         // 反转\n`+
            `      digitalWrite(4, HIGH);\n`+
            `      analogWrite(5, speed);\n`+
            `    }\n`+
            `  }\n`+
            `}`
        );

        Generator.addCode(`carDrive(${dir},${speed});`);
    }
    
    //% block="Valon robot STOP" blockType="command"
    export function carStop(parameter: any, block: any) {
        Generator.addInclude(`definevaloncar`, `PROGMEM void carDrive(int dir, int speed); // valon car 控制函数`)
        Generator.addInclude(`definevaloncarFun`, `// valon car 控制函数\n`+
            `void carDrive(int dir, int speed) {\n`+
            `  if (dir == 0) {          // 前进\n`+
            `    motorDrive(0, speed, 0);\n`+
            `    motorDrive(1, speed, 0);\n`+
            `  } else if (dir == 1) {   // 后退\n`+
            `    motorDrive(0, speed, 1);\n`+
            `    motorDrive(1, speed, 1);\n`+
            `  } else if (dir == 2) {   // 右转\n`+
            `    motorDrive(0, speed/2, 0);\n`+
            `    motorDrive(1, speed, 0);\n`+
            `  } else if (dir == 3) {   // 左转\n`+
            `    motorDrive(0, speed, 0);\n`+
            `    motorDrive(1, speed/2, 0);\n`+
            `  } else if (dir == 4) {   // 全右转\n`+
            `    motorDrive(0, 0, 0);\n`+
            `    motorDrive(1, speed, 0);\n`+
            `  } else if (dir == 5) {   // 全左转\n`+
            `    motorDrive(0, speed, 0);\n`+
            `    motorDrive(1, 0, 0);\n`+
            `  }\n`+
            `}`
        );

        Generator.addInclude(`definevalonmotor`, `PROGMEM void motorDrive(int mot, int speed, int dir); // valon motor 控制函数`)
        Generator.addInclude(`definevalonmotorFun`, `// valon motor 控制函数\n`+
            `void motorDrive(int mot, int speed, int dir) {\n`+
            `  if (mot == 0) {    // 右电机\n`+
            `    if (dir == 0) {  // 正转\n`+
            `      digitalWrite(9, LOW);\n`+
            `      analogWrite(6, speed);\n`+
            `    } else {         // 反转\n`+
            `      digitalWrite(9, HIGH);\n`+
            `      analogWrite(6, speed);\n`+
            `    }\n`+
            `  } else {           // 左电机\n`+
            `    if (dir == 0) {  // 正转\n`+
            `      digitalWrite(4, LOW);\n`+
            `      analogWrite(5, speed);\n`+
            `    } else {         // 反转\n`+
            `      digitalWrite(4, HIGH);\n`+
            `      analogWrite(5, speed);\n`+
            `    }\n`+
            `  }\n`+
            `}`
        );

        Generator.addCode(`carDrive(0,0);`);
    }

    //% block="Valon robot [MOT] Motor at [SPEED] speed [DIR]" blockType="command"
    //% MOT.shadow="dropdown" MOT.options="MOTORN" MOT.defl="MOTORN.0"
    //% SPEED.shadow="range"   SPEED.params.min=0    SPEED.params.max=255    SPEED.defl=200
    //% DIR.shadow="dropdown" DIR.options="MOTORDIR" DIR.defl="MOTORDIR.0"
    export function motorDrive(parameter: any, block: any) {
        let mot = parameter.MOT.code;
        let speed = parameter.SPEED.code;
        let dir = parameter.DIR.code;

        Generator.addInclude(`definevalonmotor`, `PROGMEM void motorDrive(int mot, int speed, int dir); // valon motor 控制函数`)
        Generator.addInclude(`definevalonmotorFun`, `// valon motor 控制函数\n`+
            `void motorDrive(int mot, int speed, int dir) {\n`+
            `  if (mot == 0) {    // 右电机\n`+
            `    if (dir == 0) {  // 正转\n`+
            `      digitalWrite(9, LOW);\n`+
            `      analogWrite(6, speed);\n`+
            `    } else {         // 反转\n`+
            `      digitalWrite(9, HIGH);\n`+
            `      analogWrite(6, speed);\n`+
            `    }\n`+
            `  } else {           // 左电机\n`+
            `    if (dir == 0) {  // 正转\n`+
            `      digitalWrite(4, LOW);\n`+
            `      analogWrite(5, speed);\n`+
            `    } else {         // 反转\n`+
            `      digitalWrite(4, HIGH);\n`+
            `      analogWrite(5, speed);\n`+
            `    }\n`+
            `  }\n`+
            `}`
        );

        Generator.addCode(`motorDrive(${mot},${speed},${dir});`);
    }
    
    //% block="Valon robot [MOT] Motor Stop" blockType="command"
    //% MOT.shadow="dropdown" MOT.options="MOTORN" MOT.defl="MOTORN.0"
    export function motorStop(parameter: any, block: any) {
        let mot = parameter.MOT.code;
        Generator.addInclude(`definevalonmotor`, `PROGMEM void motorDrive(int mot, int speed, int dir); // valon motor 控制函数`)
        Generator.addInclude(`definevalonmotorFun`, `// valon motor 控制函数\n`+
            `void motorDrive(int mot, int speed, int dir) {\n`+
            `  if (mot == 0) {    // 右电机\n`+
            `    if (dir == 0) {  // 正转\n`+
            `      digitalWrite(9, LOW);\n`+
            `      analogWrite(6, speed);\n`+
            `    } else {         // 反转\n`+
            `      digitalWrite(9, HIGH);\n`+
            `      analogWrite(6, speed);\n`+
            `    }\n`+
            `  } else {           // 左电机\n`+
            `    if (dir == 0) {  // 正转\n`+
            `      digitalWrite(4, LOW);\n`+
            `      analogWrite(5, speed);\n`+
            `    } else {         // 反转\n`+
            `      digitalWrite(4, HIGH);\n`+
            `      analogWrite(5, speed);\n`+
            `    }\n`+
            `  }\n`+
            `}`
        );

        Generator.addCode(`motorDrive(${mot},0,0);`);
    }


    //% "dftesde"
    export function noteSep0() { }

    let qtrA = `qtrA`;
    //% block="Valon 巡线传感器初始化配置" blockType="command"
    export function qtrInit(parameter: any, block: any) {
        Generator.addInclude(`QTRSensors`,`#include "QTRSensors.h"`);
        //5-number of sensors used, 4-average 4 analog samples per sensor reading, 10-emitter is controlled 
        Generator.addObject(`QTRSensorsAnalogObject`, `QTRSensorsAnalog`, `${qtrA}((unsigned char[]) {A0, A1, A2, A3, A6}, 5, 4, 10)`);
        // 旧版库文件
        // Generator.addSetup(`${qtrA}.setTypeAnalog`, `${qtrA}.setTypeAnalog();`);
        // Generator.addSetup(`${qtrA}.setEmitterPin`, `${qtrA}.setEmitterPin(10);`);
        // Generator.addSetup(`${qtrA}.setSensorPins`, `${qtrA}.setSensorPins((const uint8_t[]){A0,A1,A2,A3,A6},5);`);
        // Generator.addSetup(`${qtrA}.setSamplesPerSensor`, `${qtrA}.setSamplesPerSensor(4);`);
    }

    //% block="Valon 巡线传感器手动校准(请将所有巡线传感器扫过黑线)" blockType="command"
    export function qtrCalibrate(parameter: any, block: any) {
        Generator.addCode(`${qtrA}.calibrate();`);
    }

    //% block="Valon 巡线传感器校准值[MX][M]" blockType="reporter"
    //% MX.shadow="dropdown"   MX.options="LFSENSORSNUM_MX"     MX.defl="LFSENSORSNUM_MX.0"
    //% M.shadow="dropdownRound"   M.options="LFSENSORSNUM_M"     M.defl="LFSENSORSNUM_M.0"
    export function qtrCalibrateM(parameter: any, block: any) {
        let mx = parameter.MX.code;
        let m = parameter.M.code;
        Generator.addCode(`${qtrA}.${mx}[${m}]`);
    }
    
    //% block="Valon 巡线传感器设置校准值最小值[MIN]最大值[MAX]" blockType="command"
    //% MIN.shadow="range"   MIN.params.min=0    MIN.params.max=500    MIN.defl=250
    //% MAX.shadow="range"   MAX.params.min=501    MAX.params.max=1000    MAX.defl=800
    export function qtrCalibrateSet(parameter: any, block: any) {
        let minval = parameter.MIN.code;
        let maxval = parameter.MAX.code;
        Generator.addCode(`${qtrA}.calibrate();`);
        Generator.addCode(`for (int i = 0; i < 5; i++) \n    ${qtrA}.calibratedMinimumOn[i] = ${minval};`);
        Generator.addCode(`for (int i = 0; i < 5; i++) \n    ${qtrA}.calibratedMaximumOn[i] = ${maxval};`);
    }

    //% block="Valon 读巡线传感器值存入数组[SENSORVALUE]，并返回位置值" blockType="reporter"
    //% SENSORVALUE.shadow="string"   SENSORVALUE.defl="sv"
    export function qtrReadSensors_Line(parameter: any, block: any) {
        let sensorvalue = parameter.SENSORVALUE.code;
        sensorvalue = sensorvalue.replace(/"/g, ""); //去除字符串引号
        Generator.addInclude(`define_qtr${sensorvalue}`, `uint16_t ${sensorvalue}[5];`);
        Generator.addCode(`${qtrA}.readLine(${sensorvalue})`);
    }

    //% block="[SENSORVALUE][SVALUE]值" blockType="reporter"
    //% SENSORVALUE.shadow="string"   SENSORVALUE.defl="sv"
    //% SVALUE.shadow="dropdownRound"   SVALUE.options="LFSENSORSNUM"     SVALUE.defl="LFSENSORSNUM.0"
    export function qtrSensorsValue(parameter: any, block: any) {
        let sensorvalue = parameter.SENSORVALUE.code;
        let sValue = parameter.SVALUE.code;
        sensorvalue = sensorvalue.replace(/"/g, ""); //去除字符串引号
        Generator.addCode(`${sensorvalue}[${sValue}]`);
    }
    
    //% block="read ulrasonic sensor Unit cm" blockType="reporter"
    export function readUlrasonicSensor(parameter: any, block: any) {
        Generator.addInclude("include_DFRobot_URM10", `#include <DFRobot_URM10.h>`);
        Generator.addObject("object_DFRobot_URM10_valon", `DFRobot_URM10`, `valon_sr04;`);
        Generator.addCode(`valon_sr04.getDistanceCM(12,13)`);
    }

    //% block="---"
    export function noteSep() { }
    //% block="---"
    export function noteSep2() { }

    //% block="读取电池电压" blockType="reporter"
    export function readVoltage(parameter: any, block: any) {
        Generator.addCode(`(float)((int)(analogRead(A7)*1.955))/100`);
    }

    let valonoled = `valon_oled`;

    //% block="OLED 初始化" blockType="command"
    export function oledInit(parameter: any, block: any) {
        Generator.addInclude(`Include_DFRobot_SSD1306_I2C`, `#include <DFRobot_SSD1306_I2C.h>`)
        Generator.addObject(`DFRobot_SSD1306_I2C`, `DFRobot_SSD1306_I2C`, `${valonoled};`);
        Generator.addSetup(`${valonoled}.begin`, `${valonoled}.begin(0x3d);`);
    }

    //% externalFunc
    export function validateStr_(str) {
        let regx: RegExp = /^[a-z0-9]{1,8}\.[a-z0-9]{1,3}$/;
        if (!regx.test(str)) {
            return null;
        }
        return str;
    }

    //% block="OLED 第[LINE]行 显示[STRING]" blockType="command"
    //% LINE.shadow="range"   LINE.params.min=1    LINE.params.max=4    LINE.defl=1
    //% STRING.shadow="string"   STRING.defl="valon" 
    export function oledShowLine(parameter: any, block: any) {
        let line = parameter.LINE.code;
        let string = parameter.STRING.code;
        Generator.addInclude(`Include_DFRobot_SSD1306_I2C`, `#include <DFRobot_SSD1306_I2C.h>`)
        Generator.addObject(`DFRobot_SSD1306_I2C`, `DFRobot_SSD1306_I2C`, `${valonoled};`);
        Generator.addSetup(`${valonoled}.begin`, `${valonoled}.begin(0x3d);`);
        Generator.addCode(`${valonoled}.setCursorLine(${line});\n  ${valonoled}.printLine(${string});`);
    }

    //% block="OLED 在坐标X:[X]Y:16*[Y]显示[STRING]" blockType="command"
    //% X.shadow="range"   X.params.min=0    X.params.max=127    X.defl=0
    //% Y.shadow="range"   Y.params.min=1    Y.params.max=4    Y.defl=1
    //% STRING.shadow="string"   STRING.defl="valon"
    export function oledShowXY(parameter: any, block: any) {
        let x = parameter.X.code;
        let y = parameter.Y.code;
        let string = parameter.STRING.code;
        Generator.addInclude(`Include_DFRobot_SSD1306_I2C`, `#include <DFRobot_SSD1306_I2C.h>`)
        Generator.addObject(`DFRobot_SSD1306_I2C`, `DFRobot_SSD1306_I2C`, `${valonoled};`);
        Generator.addSetup(`${valonoled}.begin`, `${valonoled}.begin(0x3d);`);
        Generator.addCode(`${valonoled}.setCursor(${x},${y}-1);\n  ${valonoled}.print(${string});`);
    }
    
    //% block="OLED 清屏" blockType="command"
    export function oledClean(parameter: any, block: any) {
        Generator.addInclude(`Include_DFRobot_SSD1306_I2C`, `#include <DFRobot_SSD1306_I2C.h>`)
        Generator.addObject(`DFRobot_SSD1306_I2C`, `DFRobot_SSD1306_I2C`, `${valonoled};`);
        Generator.addSetup(`${valonoled}.begin`, `${valonoled}.begin(0x3d);`);
        Generator.addCode(`${valonoled}.fillScreen(0);`);
    }
    let irpin = `A0`;
    let irObject = `irrecv`;
    //% block="是否读取到引脚A0红外值" blockType="boolean"
    export function readIR(parameter: any, block: any) {
        Generator.addInclude(`Include_IRremote`, `#include <IRremote.h>`)
        Generator.addObject(`Object_IRrecv`, `IRrecv`, `${irObject}(${irpin});`);
        Generator.addSetup(`${irObject}.enableIRIn`, `${irObject}.enableIRIn();`);
        Generator.addInclude(`Include_decode_results`,`decode_results  results;`);
        Generator.addCode(`${irObject}.decode(&results)`);
    }

    //% block="读到的红外值" blockType="reporter"
    export function IRVal(parameter: any, block: any) {
        Generator.addCode(`results.value`);
    }

    //% block="恢复读取红外值" blockType="command"
    export function readIRResume(parameter: any, block: any) {
        Generator.addCode(`${irObject}.resume();`);
    }
    
    //% block="红外遥控器[BTN]值" blockType="reporter"
    //% BTN.shadow="dropdown"   BTN.options="IrButton"     BTN.defl=IrButton.0xFFA25D
    export function IRMiniValue(parameter: any, block: any) {
        let minibtnval = parameter.BTN.code;
        Generator.addCode(`${minibtnval}`);
    }

    //% block="红外遥控器[BTNH]值(手柄式)" blockType="reporter"
    //% BTNH.shadow="dropdown"   BTNH.options="IrButtonHandle"     BTNH.defl=IrButtonHandle.0xE49BE916
    export function IRHandleValue(parameter: any, block: any) {
        let Handlebtnval = parameter.BTNH.code;
        Generator.addCode(`${Handlebtnval}`);
    }

    //% block="ArduinoUNOBT BAUD [BAUD] receive data is valid?" blockType="boolean"
    //% BAUD.shadow="dropdown" BAUD.options="S_BAUD"" BAUD.defl="S_BAUD.9600"
    export function ArduinoUNOBTReceiveDataValid(parameter: any, block: any) {  
        
        let baud=parameter.BAUD.code;
        Generator.addInclude('ArduinoUNOBTInitinclude_object', `static uint8_t inBuf[5]; // 数据接收数组变量\n`+
        `uint8_t SerialReceiveData();\n`);
        
        Generator.addSetup("ArduinoUNOBTInitsetup", `Serial.begin(${baud});`);

        Generator.addInclude(`defineSerialReceiveDataFun`, ``+
            `uint8_t SerialReceiveData() {\n`+
            `  uint8_t c;\n`+
            `  static uint8_t offset, dataSize;\n`+
            `  static uint32_t checksum;\n`+
            `  static enum _serial_state {IDLE, HEADER_START, HEADER_M, HEADER_ARROW, HEADER_SIZE, HEADER_CMD, }  c_state = IDLE;\n`+
            `  while (Serial.available()) {\n`+
            `    c = Serial.read();                             // 读串口缓冲区\n`+
            `    delayMicroseconds(1);\n`+
            `    if (c_state == IDLE) {                           // 串口状态空闲,等待 HEADER_START 状态的到来\n`+
            `      c_state = (c == '$') ? HEADER_START : IDLE;    // 判定是$字符吗？是则进入 HEADER_START 状态 \n`+
            `      if (c_state == IDLE) {}                        // evaluate all other incoming serial data\n`+
            `    } else if (c_state == HEADER_START) {\n`+
            `      c_state = (c == 'M') ? HEADER_M : IDLE;        // 判定是M字符吗？是则进入HEADER_M状态\n`+
            `    } else if (c_state == HEADER_M) {\n`+
            `      c_state = (c == 0x3E) ? HEADER_ARROW : IDLE;   // 判定是>字符吗？是则进入HEADER_ARROW状态\n`+
            `    } else if (c_state == HEADER_ARROW) {            // 是ARROW字符，进入HEADER_ARROW状态，判定缓冲区的大小\n`+
            `      if (c > 10) {                                  // now we are expecting the payload size 我们期望足够的数据占用缓冲区\n`+
            `        c_state = IDLE;                              // 数据位置不够 退出循环\n`+
            `        continue;                                    // 不执行该while循环包含的后面的语句，跳出开始下一轮循环 \n`+
            `      }\n`+
            `      dataSize = c;\n`+
            `      offset = 0;\n`+
            `      checksum = 0;\n`+
            `      checksum ^= c;                                 // 校验和 1  -  dataSize\n`+
            `      c_state = HEADER_SIZE;                         // the command is to follow 接收到数据长度，进入HEADER_SIZE状态\n`+
            `    } else if (c_state == HEADER_SIZE) {\n`+
            `      inBuf[offset] = c;                             // 接收 指令(code)\n`+
            `      checksum ^= c;                                 // 校验和 2  -  code\n`+
            `      c_state = HEADER_CMD;                          // 接收到指令，进入HEADER_CMD状态\n`+
            `    } else if (c_state == HEADER_CMD && offset < dataSize) {\n`+
            `      checksum ^= c;                                 // 校验和 2  -  data\n`+
            `      inBuf[offset+1] = c;\n`+
            `      offset++;\n`+
            `    } else if (c_state == HEADER_CMD && offset >= dataSize) {\n`+
            `      c_state = IDLE;                                // 数据有效与否都返回IDLE状态，准备重新接收数据\n`+
            `      if ((checksum & 0xFF) == c)  return 0x01;      // 数据有效\n`+
            `    }\n`+
            `  }\n`+
            `  return 0x00;                                   // 默认返回，返回0x00\n`+
            `}`
        );

        Generator.addCode('SerialReceiveData()');
    }

    //% block="ArduinoUNOBT receive [BJ] CMD" blockType="boolean"
    //% BJ.shadow="dropdown" BJ.options="BT_C_VALUE"" BJ.defl="BT_C_VALUE.0x65"
    export function ArduinoUNOBTBJ(parameter: any, block: any) {
        let bj_val=parameter.BJ.code;
        Generator.addCode(`inBuf[0]==${bj_val}?1:0`);
    }

    //% block="ArduinoUNOBT receive [CMD]" blockType="reporter"
    //% CMD.shadow="dropdown" CMD.options="BTVALUE"" CMD.defl="BTVALUE.BTN"
    export function ArduinoUNOBTReceiveData(parameter: any, block: any) {
        
        let val=parameter.CMD.code;
        if(val == 'BTN' || val == 'JOYL' || val == 'COLOR_MODE'
        || val == 'SWLED_VALUE' || val == 'SWBuzzer_VALUE'
        || val == 'SWRelay_VALUE' || val == 'SWOther_VALUE')
            Generator.addCode(`inBuf[1]`);
        else if(val == 'JOYR' || val == 'COLOR_RED')
            Generator.addCode(`inBuf[2]`);
        else if(val == 'COLOR_GREEN')
            Generator.addCode(`inBuf[3]`);
        else if(val == 'COLOR_BLUE')
            Generator.addCode(`inBuf[4]`);

    }

}
