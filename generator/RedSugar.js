'use strict';

goog.provide('Blockly.Arduino.RedSugar');

goog.require('Blockly.Arduino');


Blockly.Arduino.dual_motor=function(){
   var dropdown_port = this.getFieldValue('PORT');
   var speed = Blockly.Arduino.valueToCode(this, 'speed',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   Blockly.Arduino.definitions_['dual_motor'] = '#include <RS_Motor.h>';
	Blockly.Arduino.definitions_['dual_motor'+dropdown_port] = 'RS_Motor motor'+dropdown_port+';';
	var code='motor'+dropdown_port+'.run('+dropdown_port+','+speed+');\n';
    //Blockly.Arduino.definitions_[funcName1] = code2;
   return code;
};


Blockly.Arduino.MP3_VOL = function() {
  var tx_pin = Blockly.Arduino.valueToCode(this, 'TX_PIN',Blockly.Arduino.ORDER_ATOMIC);
  var VOL = Blockly.Arduino.valueToCode(this, 'VOLUME',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_sw'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['include_serial1'] = 'SoftwareSerial Serial1(10, '+tx_pin+');\n';
  
  Blockly.Arduino.definitions_['include_volume1'] = 'void mp3_volume(uint8_t level){\n';
  Blockly.Arduino.definitions_['include_volume2'] = '	uint8_t sum = level + 0xBE;\n';
  Blockly.Arduino.definitions_['include_volume3'] = '	uint8_t volume[5] = {0xAA,0x13,0x01,level,sum};\n';
  Blockly.Arduino.definitions_['include_volume4'] = '	Serial1.write(volume,5);\n';
  Blockly.Arduino.definitions_['include_volume5'] = '}\n';

  Blockly.Arduino.setups_['setup_MP3_begin'] = 'Serial1.begin(9600);\n';
  
  var code = 'mp3_volume('+VOL+');\n'
  return code;
};

Blockly.Arduino.MP3_PLAY = function() {
  var tx_pin = Blockly.Arduino.valueToCode(this, 'TX_PIN',Blockly.Arduino.ORDER_ATOMIC);
  var Num = Blockly.Arduino.valueToCode(this, 'NUM',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';	  
	  
  Blockly.Arduino.definitions_['include_sw'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['include_serial1'] = 'SoftwareSerial Serial1(10, '+tx_pin+');\n';
  
  Blockly.Arduino.definitions_['include_play_chapter1'] = 'void mp3_play_chapter(uint16_t chapter){\n';
  Blockly.Arduino.definitions_['include_play_chapter2'] = '	uint8_t chapter_h = chapter>>8;\n';
  Blockly.Arduino.definitions_['include_play_chapter3'] = '	uint8_t chapter_l = chapter;\n';
  Blockly.Arduino.definitions_['include_play_chapter4'] = '	uint8_t sum = 0xB3 + chapter_h + chapter_l;\n';
  Blockly.Arduino.definitions_['include_play_chapter5'] = '	uint8_t play_chapter[6] = {0xAA,0x07,0x02,chapter_h,chapter_l,sum};\n';
  Blockly.Arduino.definitions_['include_play_chapter6'] = '	Serial1.write(play_chapter,6);\n';
  Blockly.Arduino.definitions_['include_play_chapter7'] = '}\n';

  Blockly.Arduino.setups_['setup_MP3_begin'] = 'Serial1.begin(9600);\n';  
	  
  var code = 'mp3_play_chapter('+Num+');\n'
  return code;
};

Blockly.Arduino.MP3_STATE = function() {
	var tx_pin = Blockly.Arduino.valueToCode(this, 'TX_PIN',Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_stat = this.getFieldValue('STAT');
  
	Blockly.Arduino.definitions_['include_sw'] = '#include <SoftwareSerial.h>';
	Blockly.Arduino.definitions_['include_serial1'] = 'SoftwareSerial Serial1(10, '+tx_pin+');\n';
  
	Blockly.Arduino.definitions_['include_play1'] = 'void mp3_play(){\n';
	Blockly.Arduino.definitions_['include_play2'] = '	unsigned char play[4] = {0xAA,0x02,0x00,0xAC};\n';
	Blockly.Arduino.definitions_['include_play3'] = '	Serial1.write(play,4);\n';
	Blockly.Arduino.definitions_['include_play4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_next_song1'] = 'void mp3_next_song(){\n';
	Blockly.Arduino.definitions_['include_next_song2'] = '	unsigned char play[4] = {0xAA,0x06,0x00,0xB0};\n';
	Blockly.Arduino.definitions_['include_next_song3'] = '	Serial1.write(play,4);\n';
	Blockly.Arduino.definitions_['include_next_song4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_last_song1'] = 'void mp3_last_song(){\n';
	Blockly.Arduino.definitions_['include_last_song2'] = '	unsigned char play[4] = {0xAA,0x05,0x00,0xAF};\n';
	Blockly.Arduino.definitions_['include_last_song3'] = '	Serial1.write(play,4);\n';
	Blockly.Arduino.definitions_['include_last_song4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_vol_up1'] = 'void mp3_vol_up(){\n';
	Blockly.Arduino.definitions_['include_vol_up2'] = '	unsigned char play[4] = {0xAA,0x14,0x00,0xBE};\n';
	Blockly.Arduino.definitions_['include_vol_up3'] = '	Serial1.write(play,4);\n';
	Blockly.Arduino.definitions_['include_vol_up4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_vol_dn1'] = 'void mp3_vol_dn(){\n';
	Blockly.Arduino.definitions_['include_vol_dn2'] = '	unsigned char play[4] = {0xAA,0x15,0x00,0xBF};\n';
	Blockly.Arduino.definitions_['include_vol_dn3'] = '	Serial1.write(play,4);\n';
	Blockly.Arduino.definitions_['include_vol_dn4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_stop1'] = 'void mp3_stop(){\n';
	Blockly.Arduino.definitions_['include_stop2'] = '	unsigned char play[4] = {0xAA,0x04,0x00,0xAE};\n';
	Blockly.Arduino.definitions_['include_stop3'] = '	Serial1.write(play,4);\n';
	Blockly.Arduino.definitions_['include_stop4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_pause1'] = 'void mp3_pause(){\n';
	Blockly.Arduino.definitions_['include_pause2'] = '	unsigned char play[4] = {0xAA,0x03,0x00,0xAD};\n';
	Blockly.Arduino.definitions_['include_pause3'] = '	Serial1.write(play,4);\n';
	Blockly.Arduino.definitions_['include_pause4'] = '}\n';
	
  
	Blockly.Arduino.setups_['setup_MP3_begin'] = 'Serial1.begin(9600);\n';  
  
	var code = 'mp3_'+dropdown_stat+';\n'
    return code;
};

Blockly.Arduino.MP3_MODE = function() {
	var tx_pin = Blockly.Arduino.valueToCode(this, 'TX_PIN',Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_stat = this.getFieldValue('STAT');
  
	Blockly.Arduino.definitions_['include_sw'] = '#include <SoftwareSerial.h>';
	Blockly.Arduino.definitions_['include_serial1'] = 'SoftwareSerial Serial1(10, '+tx_pin+');\n';
  
	Blockly.Arduino.definitions_['include_loop_play1'] = 'void mp3_loop_play(){\n';
	Blockly.Arduino.definitions_['include_loop_play2'] = '	unsigned char volume[5] = {0xAA,0x18,0x01,0x00,0xC3};\n';
	Blockly.Arduino.definitions_['include_loop_play3'] = '	Serial1.write(volume,5);\n';
	Blockly.Arduino.definitions_['include_loop_play4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_loop_single_play1'] = 'void mp3_loop_single_play(){\n';
	Blockly.Arduino.definitions_['include_loop_single_play2'] = '	unsigned char volume[5] = {0xAA,0x18,0x01,0x01,0xC4};\n';
	Blockly.Arduino.definitions_['include_loop_single_play3'] = '	Serial1.write(volume,5);\n';
	Blockly.Arduino.definitions_['include_loop_single_play4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_single_stop1'] = 'void mp3_single_stop(){\n';
	Blockly.Arduino.definitions_['include_single_stop2'] = '	unsigned char volume[5] = {0xAA,0x18,0x01,0x05,0xC5};\n';
	Blockly.Arduino.definitions_['include_single_stop3'] = '	Serial1.write(volume,5);\n';
	Blockly.Arduino.definitions_['include_single_stop4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_random_play1'] = 'void mp3_random_play(){\n';
	Blockly.Arduino.definitions_['include_random_play2'] = '	unsigned char volume[5] = {0xAA,0x18,0x01,0x03,0xC6};\n';
	Blockly.Arduino.definitions_['include_random_play3'] = '	Serial1.write(volume,5);\n';
	Blockly.Arduino.definitions_['include_random_play4'] = '}\n';
	
	Blockly.Arduino.definitions_['include_order_play1'] = 'void mp3_order_play(){\n';
	Blockly.Arduino.definitions_['include_order_play2'] = '	unsigned char volume[5] = {0xAA,0x18,0x01,0x07,0xCA};\n';
	Blockly.Arduino.definitions_['include_order_play3'] = '	Serial1.write(volume,5);\n';
	Blockly.Arduino.definitions_['include_order_play4'] = '}\n';
	
	Blockly.Arduino.setups_['setup_MP3_begin'] = 'Serial1.begin(9600);\n';  
  
	var code = 'mp3_'+dropdown_stat+';\n'
    return code;
};

Blockly.Arduino.MP3_PLAY_DISTANCE = function() {
  var tx_pin = Blockly.Arduino.valueToCode(this, 'TX_PIN',Blockly.Arduino.ORDER_ATOMIC);
  var Num = Blockly.Arduino.valueToCode(this, 'NUM',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';	  
	  
  Blockly.Arduino.definitions_['include_sw'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['include_serial1'] = 'SoftwareSerial Serial1(10, '+tx_pin+');\n';
  
  Blockly.Arduino.definitions_['include_mp3_SumCheck1'] = 'unsigned char mp3_SumCheck(unsigned char *buf, unsigned char len){\n';
  Blockly.Arduino.definitions_['include_mp3_SumCheck2'] = '    unsigned char sum = 0;\n';
  Blockly.Arduino.definitions_['include_mp3_SumCheck3'] = '    for(unsigned char i=0;i<len;i++){\n';
  Blockly.Arduino.definitions_['include_mp3_SumCheck4'] = '        sum = sum + *buf;\n';
  Blockly.Arduino.definitions_['include_mp3_SumCheck5'] = '	        buf++;\n';
  Blockly.Arduino.definitions_['include_mp3_SumCheck6'] = '	   }\n';
  Blockly.Arduino.definitions_['include_mp3_SumCheck7'] = '    return sum;\n';
  Blockly.Arduino.definitions_['include_mp3_SumCheck8'] = '}\n';
  
  Blockly.Arduino.definitions_['include_mp3_voice_table'] = 'unsigned char mp3_voice_table[30]={0x34,0x35,0x33,0x36,0x33,0x37,0x33,0x38,0x33,0x39,0x34,0x30,0x34,0x31,0x34,0x32,0x34,0x33,0x34,0x34,0x33,0x33,0x33,0x34,0x33,0x35,0x33,0x30,0x31,0x36};\n';
  
  Blockly.Arduino.definitions_['include_mp3_playDistance1'] = 'void mp3_playDistance(float s){\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance2'] = '    int num = s*10;\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance3'] = '    unsigned char Bit1 = num/1000;\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance4'] = '    if (Bit1 > 9)return;\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance5'] = '    num = num % 1000;unsigned char Bit2 = num/100;num = num % 100;unsigned char Bit3 = num/10;num = num % 10;unsigned char Bit4 = num;\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance6'] = '    unsigned char play[20];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance7'] = '    play[0]=0xAA;//HEAD\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance8'] = '    play[1]=0x1B;//CMD\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance9'] = '    int index = 3;\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance10'] = '    if(Bit1){\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance11'] = '        play[index++]=mp3_voice_table[Bit1*2];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance12'] = '        play[index++]=mp3_voice_table[Bit1*2+1];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance13'] = '	    play[index++]=mp3_voice_table[22];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance14'] = '	    play[index++]=mp3_voice_table[23];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance15'] = '    }\n';
  
  Blockly.Arduino.definitions_['include_mp3_playDistance110'] = '    if(Bit2){\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance111'] = '	    play[index++]=mp3_voice_table[Bit2*2];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance112'] = '	    play[index++]=mp3_voice_table[Bit2*2+1];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance113'] = '	    play[index++]=mp3_voice_table[24];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance114'] = '	    play[index++]=mp3_voice_table[25];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance115'] = '    }\n';
  
  Blockly.Arduino.definitions_['include_mp3_playDistance210'] = '    if(!((Bit3 == 0) && (Bit2 == 0) && (Bit1 > 0))){\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance211'] = '        play[index++]=mp3_voice_table[Bit3*2];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance212'] = '        play[index++]=mp3_voice_table[Bit3*2+1];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance215'] = '    }\n';
  
  Blockly.Arduino.definitions_['include_mp3_playDistance310'] = '    if(Bit4){\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance313'] = '	    play[index++]=mp3_voice_table[26];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance314'] = '	    play[index++]=mp3_voice_table[27];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance311'] = '       play[index++]=mp3_voice_table[Bit4*2];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance312'] = '       play[index++]=mp3_voice_table[Bit4*2+1];\n';

  Blockly.Arduino.definitions_['include_mp3_playDistance315'] = '    }\n';
  
  Blockly.Arduino.definitions_['include_mp3_playDistance413'] = '	 play[index++]=mp3_voice_table[28];\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance414'] = '	 play[index++]=mp3_voice_table[29];\n';
  
  Blockly.Arduino.definitions_['include_mp3_playDistance16'] = '    play[2]=index-3;\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance17'] = '    play[index++]=mp3_SumCheck(play,play[2]+4-1);\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance18'] = '    Serial1.write(play,play[2]+4);\n';
  Blockly.Arduino.definitions_['include_mp3_playDistance24'] = '}\n';

  Blockly.Arduino.setups_['setup_MP3_begin'] = 'Serial1.begin(9600);\n';  
	  
  var code = 'mp3_playDistance('+Num+');\n'
  return code;
};



