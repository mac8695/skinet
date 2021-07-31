using System;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IResponseCacheService
    {
        Task CacheResponseAsync(string cachKey, object response, TimeSpan timeToLive);
        Task<string>  GetCachechResponseAsync(string cachKey);
    }
}