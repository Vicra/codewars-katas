using System;
using System.Text;
public class Printer 
{
    public static string PrinterError(String s) 
    {
        byte[] asciiBytes = Encoding.ASCII.GetBytes(s);
            
        Array.Sort(asciiBytes);
        for (int i = 0; i < asciiBytes.Length; i++)
        {
            if (asciiBytes[i] > Encoding.ASCII.GetBytes("m")[0])
            {
                return (asciiBytes.Length - i) + "/" + asciiBytes.Length;
            }
        }
        return "0/" + asciiBytes.Length;
    }
}