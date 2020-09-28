using System;

public static class Kata
{
    public static int DescendingOrder(int num)
    {
        string myString = num.ToString();
        char[] charArray = myString.ToCharArray();
        Array.Sort(charArray);
        reverse(charArray);
        return Int32.Parse(new string(charArray));
    }
    static void reverse(char[] a)
    {
        int i, n = a.Length;
        char t;
        for (i = 0; i < n / 2; i++)
        {
            t = a[i];
            a[i] = a[n - i - 1];
            a[n - i - 1] = t;
        }
    }
}