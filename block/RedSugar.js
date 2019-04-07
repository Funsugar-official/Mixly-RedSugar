'use strict';

goog.provide('Blockly.Blocks.RedSugar');

goog.require('Blockly.Blocks');


Blockly.Blocks.RedSugar.HUE = "#FF6680";

var dual_motor_MS=[["MA", "1"],["MB", "2"]];



Blockly.Blocks.dual_motor={
init:function(){
    this.setColour(Blockly.Blocks.RedSugar.HUE);
    this.appendDummyInput("")
		.appendField('双路电机')
		.appendField("#")
	    .appendField(new Blockly.FieldDropdown(dual_motor_MS), "PORT");
    this.appendValueInput('speed')
        .setCheck(Number)
        .appendField('转速(-100~100)%');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.MP3_VOL={
init:function(){
    this.setColour(Blockly.Blocks.RedSugar.HUE);
    this.appendDummyInput("")
      .appendField('MP3 RX管脚#10')
	this.appendValueInput("TX_PIN", Number)
        .appendField('TX管脚#')
        .setCheck(Number);
	this.appendValueInput('VOLUME',Number)
      .setCheck(Number)
      .appendField('音量(0~30)%');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.MP3_PLAY={
init:function(){
    this.setColour(Blockly.Blocks.RedSugar.HUE);
    this.appendDummyInput("")
      .appendField('MP3 RX管脚#10')
	this.appendValueInput("TX_PIN", Number)
        .appendField('TX管脚#')
        .setCheck(Number);
	this.appendValueInput('NUM',Number)
      .setCheck(Number)
      .appendField('播放曲目');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.MP3_STATE = {
  init: function() {
    this.setColour(Blockly.Blocks.RedSugar.HUE);
    this.appendDummyInput("")
        .appendField('MP3 RX管脚#10')
	this.appendValueInput("TX_PIN", Number)
        .appendField('TX管脚#')
        .setCheck(Number);
	this.appendDummyInput("")
        .appendField('播放控制')
        .appendField(new Blockly.FieldDropdown([['播放', "play()"],['暂停', "pause()"], ['停止', "stop()"],['下一曲', "next_song()"],['上一曲', "last_song()"],['音量加', "vol_up()"],['音量减', "vol_dn()"]]), "STAT");
    this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.MP3_MODE = {
  init: function() {
    this.setColour(Blockly.Blocks.RedSugar.HUE);
    this.appendDummyInput("")
        .appendField('MP3 RX管脚#10')
	this.appendValueInput("TX_PIN", Number)
        .appendField('TX管脚#')
        .setCheck(Number);
	this.appendDummyInput("")
        .appendField('播放模式')
        .appendField(new Blockly.FieldDropdown([['全部循环', "loop_play()"],['单曲循环', "loop_single_play()"], ['单曲停止', "single_stop()"], ['随机播放', "random_paly()"],['顺序播放', "order_play()"]]), "STAT");
    this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.MP3_PLAY_DISTANCE={
init:function(){
    this.setColour(Blockly.Blocks.RedSugar.HUE);
    this.appendDummyInput("")
      .appendField('MP3 RX管脚#10')
	this.appendValueInput("TX_PIN", Number)
        .appendField('TX管脚#')
        .setCheck(Number);
	this.appendValueInput('NUM',Number)
      .setCheck(Number)
      .appendField('播放距离(cm)');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};






