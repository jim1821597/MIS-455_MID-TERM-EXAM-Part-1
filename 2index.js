if (age > 25 && age <= 30 && yearly_salary >= 100000) {
    bonus = salary * 0.2;
}
else if (age > 30 && age <= 35 && yearly_salary >= 200000) {
    bonus = salary * 0.3;
}
else if (age > 35 && yearly_salary >= 300000) {
    bonus = salary * 0.4;
}
else {
    bonus = salary * 0.1;
}