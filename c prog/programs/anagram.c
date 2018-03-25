int func (char[], char[]);

int main ()
{
  char ch1[100] = "ajay", ch2[100] = "jaya";
  int i, j;
  j = func (ch1, ch2);
  if (j == 0)
    printf ("0");
  else
    printf ("1");

  return 0;
}

int
func (char ch1[], char ch2[])
{
  int i, arr1[26] = { 0 }, arr2[26] =
  {
  0};
  while (ch1[i] != '\0')
    {
      arr1[ch1[i] - 'a']++;
      i++;
      // printf("%d",j);
    }
  i = 0;
  while (ch2[i] != '\0')
    {
      arr2[ch2[i] - 'a']++;
      i++;
    }

  for (i = 0; i < 26; i++)
    {
      if (arr1[i] != arr2[i])
	{
	  return 0;
	}
    }
  return 1;
}
