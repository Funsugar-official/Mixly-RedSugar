#ifndef _RS_MOTOR_H_
#define _RS_MOTOR_H_



class RS_Motor 
{
    public:
        RS_Motor();
        
		void run(int port,int speed);
};

RS_Motor::RS_Motor() 
{
	
}

void RS_Motor::run(int port,int speed) {

  uint8_t _DIR_pin,_PWM_pin;

  switch(port)
	{

    case 1:
        _DIR_pin = 7;

        _PWM_pin = 5;

		break;

    case 2:
        _DIR_pin = 8;

        _PWM_pin = 6;

		break;
	}

	pinMode(_DIR_pin, OUTPUT);
	
	pinMode(_PWM_pin, OUTPUT);

	speed = speed > 100 ? 100 : speed;
	
	speed = speed < -100 ? -100 : speed;
	
	if (speed == 0)
	{
	
		digitalWrite(_DIR_pin, LOW);
	
		analogWrite(_PWM_pin, 0);
	
	}
	else if(speed > 0)
	{
	
		digitalWrite(_DIR_pin, LOW);
	
		analogWrite(_PWM_pin, map(speed, 0, 100, 0, 255));
	
	}
	else
	{
	
		digitalWrite(_DIR_pin, HIGH);
	
		analogWrite(_PWM_pin,  map(-1*speed, 0, 100, 0, 255));
	
	}
}
#endif 