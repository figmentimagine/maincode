import maestro
import time
import bt_joystick

#Import .py files
servo = maestro.Controller()
control = bt_joystick.btjoystick()


#Test Servos for motion
servo.setAccel(0,25)
servo.setTarget(0,6000)
servo.setAccel(1,25)
servo.setTarget(1,6000)
servo.setAccel(2,25)
servo.setTarget(2,6000)
time.sleep(2)
servo.setAccel(0,25)
servo.setTarget(0,1000)
servo.setAccel(1,25)
servo.setAccel(1,1000)
servo.setAccel(2,25)
servo.setAccel(2,1000)
servo.close



#Main BT Controls
if control.g_joystickBits == 16 {
	servo.setAccel(0,25)
	servo.setTarget(0,6000)
}
if control.g_joystickBits == 64 {
	servo.setAccel(1,25)
	servo.setTarget(1,6000)
}
if control.g_joystickBits == 96 {
	servo.setAccel(1,25)
	servo.setAccel(1,1000)
}
if control.g_joystickBits == 144 {
	servo.setAccel(0,25)
	servo.setTarget(0,1000)
}
if control.g_buttonBits ==  128 {
	servo.setAccel(0,25)
	servo.setTarget(0,6000)
	servo.setAccel(1,25)
	servo.setTarget(1,6000)
	servo.setAccel(2,25)
	servo.setTarget(2,6000)
}
if control.g_buttonBits == 128 {
	servo.setAccel(2,25)
	servo.setAccel(2,1000)
}
