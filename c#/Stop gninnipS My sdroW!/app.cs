using System.Collections.Generic;
using System.Linq;
using System;
using System.Text;

public class Kata
{
  public static string SpinWords(string sentence)
  {
    char[] delimiterChars = { ' ' };
    string[] words = sentence.Split(delimiterChars);
    for(int i =0; i<words.Length; i++){
      if(words[i].Length >= 5){
          words[i] = ReverseString(words[i]);
      }
    }
    return ConvertStringArrayToString(words);
  }
  public static string ReverseString(string s)
  {
      char[] arr = s.ToCharArray();
      Array.Reverse(arr);
      return new string(arr);
  }
  static string ConvertStringArrayToString(string[] array)
  {
      // Concatenate all the elements into a StringBuilder.
      StringBuilder builder = new StringBuilder();
      foreach (string value in array)
      {
          builder.Append(value);
          builder.Append(' ');
      }
      builder.Length--;
      return builder.ToString();
  }
}